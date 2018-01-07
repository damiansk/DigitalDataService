import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FieldArray, reduxForm } from 'redux-form';

import AttachedFilesForm from './attachedFilesForm/AttachedFilesForm';


class RecordFiles extends Component {
  
  render() {
    const {handleSubmit, previousPage} = this.props;
    
    return (
      <article className="container">
        <form onSubmit={handleSubmit}>
          <FieldArray name="files"
                      component={AttachedFilesForm}/>
          <div className="form-row justify-content-end mt-3">
            <button type="button" className="btn btn-secondary" onClick={previousPage}>
              Previous
            </button>
            <button type="submit" className="ml-3 btn btn-primary">
              Next
            </button>
          </div>
        </form>
      </article>
    );
  }
}

RecordFiles = reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(RecordFiles);

export default connect(
  state => ({
    initialValues: state.record.activeRecord.record
  })
)(RecordFiles);
