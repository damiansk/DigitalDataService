import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonsToolbar from '../../../../../../components/pages/buttonsToolbar/ButtonsToolbar';
import ButtonsGroup from '../../../../../../components/pages/buttonsToolbar/buttonsGroup/ButtonsGroup';
import RemoveButton from '../../../../../../components/pages/buttonsToolbar/removeButton/RemoveButton';
import EditOrSaveButton from '../../../../../../components/pages/buttonsToolbar/editOrSaveButton/EditOrSaveButton';

class AttachedFile extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      file: {name, size},
      onRemove,
      onEdit,
      onSave,
      isEdited
    } = this.props;
  
    return (
      <li className="list-group-item position-relative">
        <section className="row">
          <aside className="col-xs col-md-3 col-lg-2">
            <img src="/default-thumbnail.png"
                 style={{maxHeight: '100%'}}
                 className="img-thumbnail"
                 alt="File thumbnail"/>
          </aside>
          
          <article className="col col-md-9 col-lg-10 text-center pb-5 mt-2">
            <p className="mb-0 text-right font-weight-light">Size: <span className="font-weight-normal">{(size / (1024*1024)).toFixed(2)}MB</span></p>
            <h4 className="mb-1 text-left text-truncate">{name}</h4>
            <p style={{height: '30px'}}
               className="text-left text-truncate font-weight-light">
              {isEdited && 'Edytuje...'} Auto generated description for {name}...
            </p>
          </article>
        </section>
  
        <ButtonsToolbar style={{bottom: '12px', right: '20px'}} className="position-absolute">
          <ButtonsGroup label="Remove group">
            <RemoveButton onRemove={onRemove}/>
          </ButtonsGroup>
          <ButtonsGroup label="Edit and save group">
            <EditOrSaveButton isEdited={isEdited}
                              onSave={onSave}
                              onEdit={onEdit}
                              isTextEnable={true}
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

export default AttachedFile;