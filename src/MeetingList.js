import React from "react";
import PropTypes from "prop-types";

const MeetingList = ({ meetings }) => {
  const myMeetings = meetings.map(item => {
    return (
      <div className="list-group-item d-flex" key={item.meetingID}>
        <section className="pl-3 text-left align-self-center">
          {item.meetingName}
        </section>
      </div>
    );
  });

  return <div>{myMeetings}</div>;
};

MeetingList.propTypes = {
  meetings: PropTypes.object,
};

export default MeetingList;
