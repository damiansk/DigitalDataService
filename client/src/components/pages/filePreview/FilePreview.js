import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilePreview extends Component {
  
  render() {
    console.log(this.props.file);
    
    return (
      <div className="container">
        <article className="row">
          <aside className="col-md-4 text-center">Super opcje</aside>
          <main className="col text-center">Glowne mieso</main>
        </article>
      </div>
    );
  }
}

FilePreview.propTypes = {
  file: PropTypes.instanceOf(File).isRequired,
  onSaveThumbnail: PropTypes.func
};

export default FilePreview;