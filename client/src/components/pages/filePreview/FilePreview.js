import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ModelPreview from '../ModelPreview/ModelPreview';

class FilePreview extends Component {
  
  render() {
    const { file } = this.props;
    
    return (
      <div className="container mb-4">
        <article className="row">
          <aside className="col-md-6 text-center">Super opcje</aside>
          <main className="col">
            <ModelPreview file={file}/>
          </main>
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