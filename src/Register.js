import React from "react";
import PropTypes from "prop-types";

const Register = ({ user }) => {
  return (
    <div className="text-center mt-4">
      <h1 className="text-primary">Register</h1>
    </div>
  );
};

Register.propTypes = {
  user: PropTypes.string,
};

export default Register;
