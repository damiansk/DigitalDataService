import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class RecordSummary extends Component {
  
  render() {
    const { handleSubmit, pristine, previousPage, submitting } = this.props;
    
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="employed">Employed</label>
          <div>
            <Field
              name="employed"
              id="employed"
              component="input"
              type="checkbox"
            />
          </div>
        </div>
        <div>
          <label>Notes</label>
          <div>
            <Field name="notes" component="textarea" placeholder="Notes" />
          </div>
        </div>
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" disabled={pristine || submitting}>
            Submit
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
})(RecordSummary);