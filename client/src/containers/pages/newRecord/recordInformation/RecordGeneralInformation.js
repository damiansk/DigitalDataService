import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from '../../../../components/pages/renderField/RenderField';
import SecondaryHeading from '../../../../components/pages/heading/SecondaryHeading';

class RecordGeneralInformation extends Component {
  
  constructor(props) {
    super(props);
    
    this.title = "Complete record general information"
  }
  
  render() {
    const { handleSubmit } = this.props;
    
    return (
      <article className="container">
        <SecondaryHeading title={this.title}/>
        <form onSubmit={handleSubmit}>
          <section className="row">
            <div className="col-sm-6">
              <Field name="title" type="text"
                     component={RenderField} label="Title"/>
              <Field name="resourceType" type="text"
                     component={RenderField} label="Resource type"/>
            </div>
            <div className="col-sm-6">
              <Field name="title" type="text"
                     component={RenderField} label="Title"/>
              <Field name="resourceType" type="text"
                     component={RenderField} label="Resource type"/>
            </div>
          </section>
          <div className="row justify-content-end">
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
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(RecordGeneralInformation);