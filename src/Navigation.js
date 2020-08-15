import React from "react";
import PropTypes from "prop-types";
import { FaUsers } from "react-icons/fa";
import { Link } from "@reach/router";

const Navigation = ({ user, logoutUser }) => {
  return (
    <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <FaUsers className="mr-1 mb-1" /> Meeting Log
        </Link>
        <div className="navbar-nav ml-auto">
          {user && (
            <Link className="nav-item nav-link" to="/meetings">
              Meetings
            </Link>
          )}
          {!user && (
            <Link className="nav-item nav-link" to="/login">
              Log In
            </Link>
          )}
          {!user && (
            <Link className="nav-item nav-link" to="/register">
              Register
            </Link>
          )}
          {user && (
            <Link
              className="nav-item nav-link"
              to="/login"
              onClick={e => logoutUser(e)}
            >
              Log Out
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  user: PropTypes.string,
  logoutUser: PropTypes.func,
};

export default Navigation;
