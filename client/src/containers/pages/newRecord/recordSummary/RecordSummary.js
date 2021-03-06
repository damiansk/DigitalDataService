import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import RecordPreview from '../../../../components/pages/recordPreview/RecordPreview';

class RecordSummary extends Component {
  
  render() {
    const {
      handleSubmit,
      // pristine,
      previousPage,
      submitting,
      record
    } = this.props;
    
    return (
      <article className="container">
        <RecordPreview date={new Date()}
                       declarant={this.props.user}
                       disabled={true}
                       {...record} />
        <form onSubmit={handleSubmit}>
          <div>
            <button type="button"
                    className="btn btn-secondary"
                    onClick={previousPage}>
              Previous
            </button>
            <button type="submit"
                    className="ml-3 btn btn-primary"
                    disabled={submitting}>
              Submit
            </button>
          </div>
        </form>
      </article>
    );
  }
}

RecordSummary = connect(
  ({form, auth}) => ({
    record: form.wizard.values,
    user: auth.user
  })
)(RecordSummary);

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(RecordSummary);