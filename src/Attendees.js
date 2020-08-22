import React, { useState, useEffect } from "react";
import firebase from "./Firebase";

const Attendees = ({ userID, meetingId }) => {
  const [displayAttendees, setDisplayAttendees] = useState([]);

  useEffect(() => {
    const ref = firebase
      .database()
      .ref(`meetings/${userID}/${meetingId}/attendees`);

    ref.on("value", snapshot => {
      let attendees = snapshot.val();
      let attendeesList = [];
      for (let item in attendees) {
        attendees.push({
          attendeeID: item,
          attendeeName: attendees[item].attendeeName,
          attendeeEmail: attendees[item].attendeeEmail,
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
      List Goes Here
    </div>
  );
};

export default Attendees;
