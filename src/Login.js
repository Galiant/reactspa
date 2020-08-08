import React from "react";
import PropTypes from "prop-types";

const Login = ({ user }) => {
  return (
    <div className="text-center mt-4">
      <h1 className="text-primary">Login</h1>
    </div>
  );
};

Login.propTypes = {
  user: PropTypes.string,
};

export default Login;
