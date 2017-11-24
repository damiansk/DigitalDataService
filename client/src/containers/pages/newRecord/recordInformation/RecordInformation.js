import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from '../../../../components/pages/renderField/RenderField';

class RecordInformation extends Component {
  
  render() {
    const { handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="firstName"
          type="text"
          component={RenderField}
          label="First Name"
        />
        <Field
          name="lastName"
          type="text"
          component={RenderField}
          label="Last Name"
        />
        <div>
          <button type="submit" className="next">
            Next
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(RecordInformation);