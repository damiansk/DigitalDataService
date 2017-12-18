import React from 'react';
import PropTypes from 'prop-types';

const CustomTextArea = ({ input, label, meta: { touched, error }}) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <textarea className={`form-control ${touched && error && 'border border-danger'}`}
                placeholder={label}
                {...input}/>
      {/*{touched && error && <span>{error}</span>}*/}
    </div>
  </div>
);

CustomTextArea.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  disableArea: PropTypes.bool
};

export default CustomTextArea;