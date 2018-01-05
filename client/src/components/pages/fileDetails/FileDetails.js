import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageInputWithPreview from '../imageInputWithPreview/ImageInputWithPreview';
import ButtonsGroup from '../buttonsToolbar/buttonsGroup/ButtonsGroup';
import ButtonsToolbar from '../buttonsToolbar/ButtonsToolbar';


class FileDetails extends Component {
  
  render() {
    const {
      name,
      thumbnail,
      description,
      // fetchFile
    } = this.props.fileDetails;
    
    return (
      <div className="container mb-4">
  
        <section className="row">
          <aside className="col-xs col-md-3 col-xl-2">
            <ImageInputWithPreview activeEditing={false}
                                   image={thumbnail} />
          </aside>
          <div className="col col-md-9 col-xl-10 text-center pb-5">
            <h5 className="mb-1 text-left text-truncate w-100">{name}</h5>
            <article className="mt-3 text-left">
              <p>{description}</p>
              
            </article>
          </div>
        </section>
        <ButtonsToolbar style={{bottom: '12px', right: '20px'}} className="position-absolute">
          <ButtonsGroup label="Remove group">
            <button className="btn btn-primary">
              Preview
            </button>
          </ButtonsGroup>
          <ButtonsGroup label="Edit and save group">
            <button className="btn btn-secondary">
              Download
            </button>
          </ButtonsGroup>
        </ButtonsToolbar>
      </div>
    );
  }
}


FileDetails.propTypes = {
  file: PropTypes.instanceOf(File),
  fetchFile: PropTypes.func.isRequired,
  fileDetails: PropTypes.object.isRequired
};

export default FileDetails;