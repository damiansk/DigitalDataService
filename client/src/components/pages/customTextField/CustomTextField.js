import React from 'react';

const CustomTextField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group row align-items-center justify-content-between">
    <label className="col-md">{label}</label>
    <div className="col-md-8">
      <input {...input} className="form-control" placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default CustomTextField;