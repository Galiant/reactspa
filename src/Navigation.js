import React from "react";
import PropTypes from "prop-types";
import { FaUsers } from "react-icons/fa";

const Navigation = ({ user }) => {
  return (
    <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <FaUsers className="mr-1 mb-1" /> Meeting Log
        </a>
        <div className="navbar-nav ml-auto">
          {user && (
            <a className="nav-item nav-link" href="/meetings">
              Meetings
            </a>
          )}
          {!user && (
            <a className="nav-item nav-link" href="/login">
              Log In
            </a>
          )}
          {!user && (
            <a className="nav-item nav-link" href="/register">
              Register
            </a>
          )}
          {user && (
            <a className="nav-item nav-link" href="/login">
              Log Out
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  user: PropTypes.string,
};

export default Navigation;
