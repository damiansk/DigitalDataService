import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import CustomTextField from '../../../../components/pages/customTextField/CustomTextField';

class RecordFiles extends Component {
  
  RenderError = ({ meta: { touched, error } }) =>
    touched && error ? <span>{error}</span> : false;
  
  render() {
    const { handleSubmit, previousPage } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="email" type="email" component={CustomTextField} label="Email" />
        <div>
          <label>Sex</label>
          <div>
            <label>
              <Field
                name="sex"
                component="input"
                type="radio"
                value="male"
              />{' '}
              Male
            </label>
            <label>
              <Field
                name="sex"
                component="input"
                type="radio"
                value="female"
              />{' '}
              Female
            </label>
            <Field name="sex" component={this.RenderError} />
          </div>
        </div>
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" className="next">
            Next
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(RecordFiles);