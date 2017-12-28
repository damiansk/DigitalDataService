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

class AttachedFile extends Component {
  
  constructor(props) {
    super(props);
    
    this.updateThumbnail = this.updateThumbnail.bind(this);
  }
  
  generateFilePreviewComponent() {
    return (
      <section className="row mb-4">
        <FilePreview
          onSaveThumbnail={this.updateThumbnail}
          file={this.props.file}/>
      </section>
    );
  }
  
  updateThumbnail(value) {
    const { name } = this.props;
    this.props.change('wizard', `${name}.thumbnail`, value);
  }
  
  render() {
    const {
      file: {name: fileName, size},
      onRemove,
      onEdit,
      onSave,
      activeEditing,
      name
    } = this.props;
    
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
            <p className="mb-0 text-right font-weight-light">Size: <span className="font-weight-normal">{(size / (1024*1024)).toFixed(2)}MB</span></p>
            <h5 className="mb-1 text-left text-truncate w-100">{fileName}</h5>
            <Field name={`${name}.description`}
                   className="font-weight-light w-100"
                   type="text"
                   disableHeight="30px"
                   activeEditing={activeEditing}
                   component={TextAreaToLabelField}/>
          </article>
        </section>
  
        {activeEditing && this.generateFilePreviewComponent()}
        
        <ButtonsToolbar style={{bottom: '12px', right: '20px'}} className="position-absolute">
          <ButtonsGroup label="Remove group">
            <RemoveButton onRemove={onRemove}/>
          </ButtonsGroup>
          <ButtonsGroup label="Edit and save group">
            <EditOrSaveButton isEdited={activeEditing} onSave={onSave}
                              onEdit={onEdit} isTextEnable={true}
                              style={{width: '80px'}}/>
          </ButtonsGroup>
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
  null,
  dispatch => bindActionCreators({change}, dispatch)
)(AttachedFile);