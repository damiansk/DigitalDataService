import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import CustomTextField from '../../../../components/pages/customTextField/CustomTextField';
import CustomTextArea from '../../../../components/pages/customTextArea/CustomTextArea';
import SecondaryHeading from '../../../../components/pages/heading/SecondaryHeading';

class RecordGeneralInformation extends Component {
  
  constructor(props) {
    super(props);
    
    this.title = "Complete general information about record";
  }
  
  render() {
    const { handleSubmit } = this.props;
    
    return (
      <article className="container">
        <SecondaryHeading title={this.title}/>
        <form onSubmit={handleSubmit}>
          <div className="form-row equal">
            <div className="form-group col-lg-6">
              <Field name="title" type="text"
                     component={CustomTextField} label="Title"/>
              <Field name="resourceType" type="text"
                     component={CustomTextField} label="Resource type"/>
              <Field name="keywords" type="text"
                     component={CustomTextField} label="Keywords"/>
              <Field name="destination" type="text"
                     component={CustomTextField} label="Destination group"/>
            </div>
            <div className="form-group col-lg-6">
              <Field name="description" type="text"
                     component={CustomTextArea} label="Description"/>
            </div>
          </div>
          <div className="form-row justify-content-end">
            <button type="submit" className="btn btn-secondary">
              Next
            </button>
          </div>
        </form>
      </article>
    );
  }
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(RecordGeneralInformation);