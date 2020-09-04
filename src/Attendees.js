import React, { useState, useEffect } from "react";
import firebase from "./Firebase";
import AttendeesList from "./AttendeesList";
import { FaUndo } from "react-icons/fa";

const Attendees = ({ userID, meetingId, adminUser }) => {
  const [displayAttendees, setDisplayAttendees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const attendeesRef = firebase
      .database()
      .ref(`meetings/${userID}/${meetingId}/attendees`);

    attendeesRef.on("value", snapshot => {
      let attendees = snapshot.val();
      let attendeesList = [];

      for (let item in attendees) {
        attendeesList.push({
          attendeeId: item,
          attendeeName: attendees[item].attendeeName,
          attendeeEmail: attendees[item].attendeeEmail,
          star: attendees[item].star,
        });
      }
      setDisplayAttendees(attendeesList);
    });
  }, [userID, meetingId]);

  const handleQuery = () => {
    return setSearchQuery("");
  };

  const handleChange = (event, setItem) => {
    return setItem(event.target.value);
  };

  const dataFilter = item =>
    item.attendeeName.toLowerCase().match(searchQuery.toLowerCase()) && true;

  const filteredAttendees = displayAttendees.filter(dataFilter);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="font-weight-light text-center">Attendees</h1>
          <div className="card bg-light mb-4">
            <div className="card-body text-center">
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  name="searchQuery"
                  value={searchQuery}
                  placeholder="Search Attendees"
                  className="form-control"
                  onChange={e => handleChange(e, setSearchQuery)}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-sm btn-outline-info"
                    title="Reset search"
                    onClick={() => handleQuery()}
                  >
                    <FaUndo />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AttendeesList
        userID={userID}
        attendees={filteredAttendees}
        adminUser={adminUser}
        meetingId={meetingId}
      />
    </div>
  );
};

export default Attendees;
