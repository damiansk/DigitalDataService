import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ImageInputWithPreview.css';

class ImageInputWithPreview extends Component {
  
  constructor(props) {
    super(props);
    
    this.uploadNewThumbnail = this.uploadNewThumbnail.bind(this);
  }
  
  uploadNewThumbnail({target: {files}}) {
    if (!files && !files[0]) return;
    
    const { onThumbnailUpdate } = this.props;
    const reader = new FileReader();
    reader.onload = ({target}) => onThumbnailUpdate(target.result);
    
    reader.readAsDataURL(files[0]);
  }
  
  render() {
    const { input, activeEditing, image } = this.props;
    
    return (
      <div>
        <label data-describe="Upload own thumbnail"
               className={`mb-0 ${activeEditing ? 'thumbnailUploadLabel' : ''}`}>
          <img src={image || (input && input.value) || '/default-thumbnail.png'}
               style={{maxHeight: '100%'}}
               className="img-thumbnail"
               alt="File thumbnail"/>
          <input onChange={this.uploadNewThumbnail}
                 accept="image/*"
                 type="file"
                 disabled={!activeEditing}
                 style={{display: 'none'}}/>
        </label>
      </div>
    );
  }
}

ImageInputWithPreview.propTypes = {
  activeEditing: PropTypes.bool,
  input: PropTypes.object,
  onThumbnailUpdate: PropTypes.func,
  image: PropTypes.string
};

export default ImageInputWithPreview;