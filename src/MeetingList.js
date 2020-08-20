import React from "react";
import PropTypes from "prop-types";
import firebase from "./Firebase";
import { GoTrashcan } from "react-icons/go";

const MeetingList = ({ meetings, userID }) => {
  const deleteMeeting = (e, whichMeeting) => {
    e.preventDefault();

    const ref = firebase.database().ref(`meetings/${userID}/${whichMeeting}`);

    ref.remove();
  };

  const myMeetings = meetings.map(item => {
    return (
      <div className="list-group-item d-flex" key={item.meetingId}>
        <ssection
          className="btn-group align-self-center"
          role="group"
          aria-label="Meeting Options"
        >
          <button
            className="btn btn-sm btn-outline-secondary"
            title="Delete Meeting"
            onClick={e => deleteMeeting(e, item.meetingId)}
          >
            <GoTrashcan />
          </button>
        </ssection>

        <section className="pl-3 text-left align-self-center">
          {item.meetingName}
        </section>
      </div>
    );
  });

  return <div>{myMeetings}</div>;
};

MeetingList.propTypes = {
  meetings: PropTypes.array,
};

export default MeetingList;
