import React, { useState, useEffect } from "react";
import firebase from "./Firebase";
import AttendeesList from "./AttendeesList";

const Attendees = ({ userID, meetingId, adminUser }) => {
  const [displayAttendees, setDisplayAttendees] = useState([]);

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

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="font-weight-light text-center">Attendees</h1>
        </div>
      </div>
      <AttendeesList
        userID={userID}
        attendees={displayAttendees}
        adminUser={adminUser}
        meetingId={meetingId}
      />
    </div>
  );
};

export default Attendees;
