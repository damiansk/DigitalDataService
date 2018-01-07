import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageInputWithPreview from '../imageInputWithPreview/ImageInputWithPreview';
import ButtonsGroup from '../buttonsToolbar/buttonsGroup/ButtonsGroup';
import ButtonsToolbar from '../buttonsToolbar/ButtonsToolbar';
import ModelPreview from '../ModelPreview/ModelPreview';


class FileDetails extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      isFetching: false,
      download: false,
      preview: false,
      fileLink: ''
    };
    
    this.saveFileToUser = this.saveFileToUser.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
    this.previewModel = this.previewModel.bind(this);
  }
  
  componentDidUpdate() {
    if(this.state.download && this.state.isFetching && this.props.file) {
      this.setState({
        isFetching: false,
        download: false,
        fileLink: URL.createObjectURL(this.props.file)
      }, () => {
        this.saveFileToUser();
      });
    }
  
    if(this.state.preview && this.state.isFetching && this.props.file) {
      this.setState({
        isFetching: false,
        fileLink: URL.createObjectURL(this.props.file)
      });
    }
  }
  
  saveFileToUser() {
    this.download.click();
  }
  
  downloadFile() {
    if(this.props.file) {
      this.saveFileToUser();
    } else {
      this.setState({
        isFetching: true,
        download: true
      });
      this.props.fetchFile();
    }
  }
  
  
  
  
  previewModel() {
    if(!this.props.file) {
      this.setState({
        isFetching: true,
        preview: true
      }, () => {
        this.props.fetchFile();
      });
    } else {
      this.setState({preview: !this.state.preview});
    }
  }
  
  render() {
    const {
      name,
      thumbnail,
      description
    } = this.props.fileDetails;
    const { file } = this.props;
    
    return (
      <div className="container mb-5">
  
        <section className="row">
          <aside className="col-xs col-md-3 col-xl-2">
            <ImageInputWithPreview activeEditing={false}
                                   image={thumbnail} />
          </aside>
          <div className="col col-md-9 col-xl-10 text-center">
            <h5 className="mb-1 text-left text-truncate w-100">{name}</h5>
            <article className="mt-3 text-left">
              <p>{description}</p>
            </article>
          </div>
        </section>
        <section className="row text-center">
          <div className="col col-sm-8 offset-sm-2">
          {this.state.preview ?
            file ?
              <ModelPreview backgroundColor={'#000000'}
                            meshColor={'#eaeaea'}
                            fileExt={name.split('.').pop()}
                            file={file}/>
              :
              "Fetching file, please wait..."
          : null }
          </div>
          <a target="_blank"
             ref={download => this.download = download}
             style={{display: 'none'}}
             href={this.state.fileLink} aria-hidden="true">
            Download
          </a>
        </section>
        <ButtonsToolbar style={{bottom: '12px', right: '20px'}} className="position-absolute">
          <ButtonsGroup label="Edit and save group">
            <button type="button"
                    onClick={this.downloadFile}
                    className="btn btn-secondary">
              Download
            </button>
          </ButtonsGroup>
          <ButtonsGroup label="Remove group">
            <button type="button"
                    onClick={this.previewModel}
                    className={`btn ${this.state.preview && file ? 'btn-outline-success': 'btn-primary'}`}>
              {this.state.preview && file ? 'Close' : 'Preview'}
            </button>
          </ButtonsGroup>
        </ButtonsToolbar>
      </div>
    );
  }
}


FileDetails.propTypes = {
  file: PropTypes.instanceOf(Blob),
  fetchFile: PropTypes.func.isRequired,
  fileDetails: PropTypes.object.isRequired
};

export default FileDetails;