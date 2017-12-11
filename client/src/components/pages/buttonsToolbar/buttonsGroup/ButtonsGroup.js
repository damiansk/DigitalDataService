import React from 'react';
import PropTypes from 'prop-types';

const ButtonsGroup = ({label, children}) => (
  <div className="btn-group ml-2" role="group" aria-label={label}>
    {children}
  </div>
);

ButtonsGroup.propTypes = {
  label: PropTypes.string.isRequired
};

export default ButtonsGroup;