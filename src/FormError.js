import React from "react";
import PropTypes from "prop-types";

const FormError = ({ theMessage }) => {
  return <div className="col-12 alert alert-danger px-3">{theMessage}</div>;
};

FormError.propTypes = {
  theMessage: PropTypes.string,
};

export default FormError;
