import React from "react";
import PropTypes from "prop-types";

const Welcome = ({ user }) => {
  return (
    <div className="text-center mt-4">
      <span className="text-secondary font-weight-bold pl-1">
        Welcome {user}
      </span>
      <a href="/" className="text-primary font-weight-bold pl-1">
        Log Out
      </a>
    </div>
  );
};

Welcome.propTypes = {
  user: PropTypes.string,
};

export default Welcome;
