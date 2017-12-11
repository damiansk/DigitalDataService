import React from 'react';
import PropTypes from 'prop-types';

const RemoveButton = ({isEdited, isTextEnable, onEdit, onSave, ...rest}) => (
  <button type="button"
          className={`btn btn-outline-${isEdited ? 'success' : 'primary'} btn-sm`}
          onClick={isEdited ? onSave : onEdit}
          {...rest}>
    <i className={`fa ${isEdited ? 'fa-floppy-o' : 'fa-pencil'}`} aria-hidden="true"/>
    {(isTextEnable && isEdited) ? ' Save' : ' Edit'}
  </button>);

RemoveButton.propTypes = {
  isEdited: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  isTextEnable: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string
};

export default RemoveButton;