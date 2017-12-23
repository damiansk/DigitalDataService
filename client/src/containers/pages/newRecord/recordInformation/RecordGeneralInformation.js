import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import CustomTextField from '../../../../components/pages/customTextField/CustomTextField';
import CustomTextArea from '../../../../components/pages/customTextArea/CustomTextArea';
import SecondaryHeading from '../../../../components/pages/heading/SecondaryHeading';
import { required } from '../../../../utils/formValidationRules';

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
              <Field name="title"
                     type="text"
                     label="Title"
                     validate={[required]}
                     component={CustomTextField}/>
              <Field name="resourceType"
                     type="text"
                     label="Resource type"
                     validate={[required]}
                     component={CustomTextField}/>
              <Field name="keywords"
                     type="text"
                     label="Keywords"
                     validate={[required]}
                     component={CustomTextField}/>
              <Field name="destination"
                     type="text"
                     label="Destination group"
                     validate={[required]}
                     component={CustomTextField}/>
            </div>
            <div className="form-group col-lg-6">
              <Field name="description"
                     type="text"
                     label="Description"
                     validate={[required]}
                     component={CustomTextArea}/>
            </div>
          </div>
          <div className="form-row justify-content-end">
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
})(RecordGeneralInformation);