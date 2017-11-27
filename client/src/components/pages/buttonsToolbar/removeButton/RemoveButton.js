import React from 'react';
import PropTypes from 'prop-types';

const RemoveButton = ({onRemove, text, ...rest}) => (
  <button type="button"
          className="btn btn-outline-danger"
          onClick={onRemove}
          {...rest}>
    <i className="fa fa-trash-o" aria-hidden="true"/>
    {text || ''}
  </button>
);

RemoveButton.propTypes = {
  onRemove: PropTypes.func.isRequired,
  text: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string
};

export default RemoveButton;