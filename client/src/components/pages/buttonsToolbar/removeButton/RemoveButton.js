import React from 'react';
import PropTypes from 'prop-types';

const RemoveButton = ({onRemove, children, ...rest}) => (
  <button type="button"
          className="btn btn-outline-danger"
          onClick={onRemove}
          {...rest}>
    <i className="fa fa-trash-o" aria-hidden="true"/>
    {children}
  </button>
);

RemoveButton.propTypes = {
  onRemove: PropTypes.func.isRequired,
  text: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string
};

export default RemoveButton;