import React from 'react';
import PropTypes from 'prop-types';

import './CustomTextArea.css';

const CustomTextArea = ({ input, label, type, meta: { touched, error }, disableArea = false, className}) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <textarea className={`form-control ${className} ${disableArea && 'disable-textarea'}`}
                placeholder={label}
                type={type}
                disabled={disableArea}
                {...input}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

CustomTextArea.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  disableArea: PropTypes.bool
};

export default CustomTextArea;