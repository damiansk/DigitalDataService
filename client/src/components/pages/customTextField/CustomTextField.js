import React from 'react';
import PropTypes from 'prop-types';

const CustomTextField = props => {
  const {
    input, label, type,
    meta: {touched, error}
  } = props;
  
  return (
  <div className="form-group row align-items-center justify-content-between">
    <label className="col-md">{label}</label>
    <div className="col-md-8">
      <input  {...input} className={`form-control ${touched && error && 'border border-danger'}`} placeholder={label} type={type} />
    </div>
  </div>
)};

CustomTextField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default CustomTextField;