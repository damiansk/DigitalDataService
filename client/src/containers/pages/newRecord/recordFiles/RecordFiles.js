import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import SecondaryHeading from '../../../../components/pages/heading/SecondaryHeading';
import CustomDropzone from '../../../../components/pages/customDropzone/CustomDropzone';

class RecordFiles extends Component {

  constructor(props) {
    super(props);
    
    this.firstTitle = "Attach files";
    this.secondTitle = "Attached files";
    
    this.state = {
      filesCount: 0
    }
  }
  
  render() {
    const { handleSubmit, previousPage } = this.props;
    const { filesCount: fileNumber } = this.state;
    
    return (
      <article className="container">
        <SecondaryHeading title={this.firstTitle}/>
        <form onSubmit={handleSubmit}>
          
          <Field name={`file-${fileNumber}`} component={CustomDropzone}/>
          
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