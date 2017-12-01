import React, { Component } from 'react';

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
    const { input } = this.props;
    
    return (
      <div>
        <label data-describe="Click here to change thumbnail"
               className="thumbnailUploadLabel mb-0">
          <img src={input.value || '/default-thumbnail.png'}
               style={{maxHeight: '100%'}}
               className="img-thumbnail"
               alt="File thumbnail"/>
          <input onChange={this.uploadNewThumbnail}
                 accept="image/*"
                 type="file"
                 style={{display: 'none'}}/>
        </label>
      </div>
    );
  }
}

export default ImageInputWithPreview;