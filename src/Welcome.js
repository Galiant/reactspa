import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

const Welcome = ({ userName, logoutUser }) => {
  return (
    <div className="text-center mt-4">
      <span className="text-secondary font-weight-bold pl-1">
        Welcome {userName}
      </span>
      <Link
        to="/login"
        className="text-primary font-weight-bold pl-1"
        onClick={e => logoutUser(e)}
      >
        Log Out
      </Link>
    </div>
  );
};

Welcome.propTypes = {
  userName: PropTypes.string,
  logoutUser: PropTypes.func,
};

export default Welcome;
