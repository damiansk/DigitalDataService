import React from 'react';
import PropTypes from 'prop-types';

const CustomTextField = props => {
  const {
    input, label, type, errorMessage,
    meta: {touched, error}
  } = props;
  
  let message = errorMessage || error;
  
  return (
  <div className="form-group row align-items-center justify-content-between">
    <label className="col-md">{label}</label>
    <div className="col-md-8">
      <input  {...input} className={`form-control ${touched && error && 'border border-danger'}`} placeholder={label} type={type} />
      {/*{touched && error && <span className="font-weight-light text-danger">{message}</span>}*/}
    </div>
  </div>
)};

CustomTextField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  errorMessage: PropTypes.string
};

export default CustomTextField;