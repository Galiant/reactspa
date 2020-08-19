import React from "react";
import PropTypes from "prop-types";

const MeetingList = ({ meetings }) => {
  const myMeetings = meetings.map(item => {
    return (
      <div className="list-group-item d-flex" key={item.meetingId}>
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
