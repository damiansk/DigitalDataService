import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, change } from 'redux-form';

import ButtonsToolbar from '../../../../../../components/pages/buttonsToolbar/ButtonsToolbar';
import ButtonsGroup from '../../../../../../components/pages/buttonsToolbar/buttonsGroup/ButtonsGroup';
import RemoveButton from '../../../../../../components/pages/buttonsToolbar/removeButton/RemoveButton';
import EditOrSaveButton from '../../../../../../components/pages/buttonsToolbar/editOrSaveButton/EditOrSaveButton';
import FilePreview from '../../../../../../components/pages/filePreview/FilePreview';
import ImageInputWithPreview from '../../../../../../components/pages/imageInputWithPreview/ImageInputWithPreview';
import TextAreaToLabelField from '../../../../../../components/pages/textareaToLabelField/TextAreaToLabelField';
import { generateThumbnail, fetchFile } from '../../../../../../actions/file';

class AttachedFile extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      generatePreview: false,
      fetchedFile: undefined,
      waitingForFile: false
    };
    
    this.updateThumbnail = this.updateThumbnail.bind(this);
    this.fetchFileAndGeneratePreview = this.fetchFileAndGeneratePreview.bind(this);
  }
  
  generateFilePreviewComponent() {
    return (
      <section className="row mb-4">
        <FilePreview
          onSaveThumbnail={this.updateThumbnail}
          fileExt={this.props.data.name.split('.').pop()}
          file={this.props.file || this.state.fetchedFile}/>
      </section>
    );
  }
  
  componentWillUpdate(nextProps) {
    const fetchedFileID = nextProps.filesStoreIDs.find(id => this.props.data._id === id);
    console.log(fetchedFileID);
    
    if(fetchedFileID && this.state.waitingForFile) {
      this.setState({
        fetchedFile: nextProps.filesStore[fetchedFileID],
        generatePreview: true,
        waitingForFile: false
      });
    }
  }
  
  updateThumbnail(value) {
    const { name } = this.props;
    this.props.change('wizard', `${name}.thumbnail`, value);
  }
  
  fetchFileAndGeneratePreview() {
    if(this.props.file) {
      this.setState({generatePreview: true});
    } else {
      const fetchedFileID = this.props.filesStoreIDs.find(id => this.props.data._id === id);
      
      if(fetchedFileID) {
        this.setState({
          fetchedFile: this.props.filesStore[fetchedFileID],
          generatePreview: true
        });
      } else {
        this.props.fetchFile(this.props.activeRecord._id, this.props.data._id);
        this.setState({waitingForFile: true});
      }
    }
    
    
  }
  
  render() {
    const {
      file,
      onRemove,
      onEdit,
      activeEditing,
      name
    } = this.props;
    
    const fileName = this.props.data.name;
    let size;
    
    if(file) {
       size = file.size;
    }
    
    const onSave = (...args) => {
      this.props.onSave(...args);
      this.setState({generatePreview: false});
    };
    
    return (
      <li className="list-group-item position-relative mb-3">
        <section className="row">
          <aside className="col-xs col-md-3 col-xl-2">
            <Field name={`${name}.thumbnail`}
                   activeEditing={activeEditing}
                   onThumbnailUpdate={this.updateThumbnail}
                   component={ImageInputWithPreview}/>
          </aside>
          
          <article className="col col-md-9 col-xl-10 text-center pb-5">
            {size ?
              <p className="mb-0 text-right font-weight-light">Size: <span
                className="font-weight-normal">{(size / (1024 * 1024)).toFixed(2)}MB</span></p>
            : null}
            <h5 className="mb-1 text-left text-truncate w-100">{fileName}</h5>
            <Field name={`${name}.description`}
                   className="font-weight-light w-100"
                   type="text"
                   disableHeight="30px"
                   activeEditing={activeEditing}
                   component={TextAreaToLabelField}/>
          </article>
        </section>
  
        {activeEditing && !this.state.generatePreview &&
          <section className="row mb-4">
            <button type="button"
                    onClick={this.fetchFileAndGeneratePreview}
                    style={{margin: '0 auto 60px'}}
                    className="btn btn-primary">
              Generate file preview
            </button>
          </section>
        }
        {activeEditing && this.state.generatePreview && this.generateFilePreviewComponent()}
        
        <ButtonsToolbar style={{bottom: '12px', right: '20px'}} className="position-absolute">
          <ButtonsGroup label="Remove group">
            <RemoveButton onRemove={onRemove}/>
          </ButtonsGroup>
          <ButtonsGroup label="Edit and save group">
            <EditOrSaveButton isEdited={activeEditing} onSave={onSave}
                              onEdit={onEdit} isTextEnable={true}
                              style={{width: '80px'}}/>
          </ButtonsGroup>
          {!this.state.generatePreview ?
            <ButtonsGroup label="Generate thumbnail">
              <button className="btn btn-success btn-sm" type="button"
                      onClick={() => this.props.generateThumbnail(file, this.updateThumbnail)}>
                Thumbnail
              </button>
            </ButtonsGroup>
          : null}
        </ButtonsToolbar>
      </li>
    )
  }
}

AttachedFile.propTypes = {
  file: PropTypes.instanceOf(File),
  name: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  activeEditing: PropTypes.bool.isRequired
};

export default connect(
  ({files, record}) => ({
    activeRecord: record.activeRecord.record,
    filesStoreIDs: files.fetchedFilesId,
    filesStore: files.fetchedFiles,
  }),
  dispatch => bindActionCreators({change, generateThumbnail, fetchFile}, dispatch)
)(AttachedFile);