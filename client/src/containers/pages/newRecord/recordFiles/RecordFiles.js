import React, { Component } from 'react';
import { FieldArray, reduxForm } from 'redux-form';

import AttachedFileForm from './AttachedFileForm';


class RecordFiles extends Component {
  
  render() {
    const {
      handleSubmit,
      previousPage
    } = this.props;
    
    return (
      <article className="container">
        <form onSubmit={handleSubmit}>
          <FieldArray name="files"
                      component={AttachedFileForm}/>
          <div className="form-row justify-content-end mt-3">
            <button type="button" className="btn btn-secondary" onClick={previousPage}>
              Previous
            </button>
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
        </form>
      </article>
    );
  }
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(RecordFiles);
