import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ButtonsToolbar from '../../../../../../components/pages/buttonsToolbar/ButtonsToolbar';
import ButtonsGroup from '../../../../../../components/pages/buttonsToolbar/buttonsGroup/ButtonsGroup';
import RemoveButton from '../../../../../../components/pages/buttonsToolbar/removeButton/RemoveButton';
import EditOrSaveButton from '../../../../../../components/pages/buttonsToolbar/editOrSaveButton/EditOrSaveButton';
import CustomTextArea from '../../../../../../components/pages/customTextArea/CustomTextArea';
import { Field, change } from 'redux-form';
import FilePreview from '../../../../../../components/pages/filePreview/FilePreview';

class AttachedFile extends Component {
  
  generateFilePreviewComponent() {
    return (
      <section className="row mb-4">
        <FilePreview file={this.props.file}/>
      </section>
    );
  }
  
  render() {
    const {
      file: {name: fileName, size},
      // onRemove,
      onEdit,
      onSave,
      isEdited,
      name
    } = this.props;
  
    return (
      <li className="list-group-item position-relative">
        <section className="row mb-2">
          <aside className="col-xs col-md-4 col-lg-3">
            <img src="/default-thumbnail.png"
                 style={{maxHeight: '100%'}}
                 className="img-thumbnail"
                 alt="File thumbnail"/>
          </aside>
          
          <article className="col col-md-8 col-lg-9 text-center pb-4 mt-2">
            <p className="mb-0 text-right font-weight-light">Size: <span className="font-weight-normal">{(size / (1024*1024)).toFixed(2)}MB</span></p>
            <h5 className="mb-1 text-left text-truncate">{fileName}</h5>
            <Field name={`${name}.description`}
                   className="font-weight-light w-100"
                   type="text"
                   disableArea={!isEdited}
                   component={CustomTextArea}/>
          </article>
        </section>
  
        {isEdited && this.generateFilePreviewComponent()}
        
        <ButtonsToolbar style={{bottom: '12px', right: '20px'}} className="position-absolute">
          <ButtonsGroup label="Remove group">
            <RemoveButton onRemove={() => this.props.change('wizard', `${name}.description`, 'New value')}/>
          </ButtonsGroup>
          <ButtonsGroup label="Edit and save group">
            <EditOrSaveButton isEdited={isEdited} onSave={onSave}
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
  onRemove: PropTypes.func.isRequired
};

export default connect(
  null,
  dispatch => bindActionCreators({change}, dispatch)
)(AttachedFile);