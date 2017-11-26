import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AttachedFile extends Component {
  
  render() {
    return (
      <div>Attached file</div>
    )
  }
}

AttachedFile.propTypes = {
  file: PropTypes.instanceOf(File),
  name: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default AttachedFile;