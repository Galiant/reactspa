import React from "react";
import PropTypes from "prop-types";

const Meetings = ({ user }) => {
  return (
    <div className="text-center mt-4">
      <h1 className="text-primary">Meetings</h1>
    </div>
  );
};

Meetings.propTypes = {
  user: PropTypes.string,
};

export default Meetings;
