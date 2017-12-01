import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import SecondaryHeading from '../../../../components/pages/heading/SecondaryHeading';

class RecordSummary extends Component {
  
  constructor(props) {
    super(props);
    
    this.title = 'Record summary';
  }
  
  render() {
    const { handleSubmit, pristine, previousPage, submitting } = this.props;
    
    return (
      <article className="container">
        <SecondaryHeading title={this.title}/>
        <form onSubmit={handleSubmit}>
          <div>
            <button type="button"
                    className="btn btn-secondary"
                    onClick={previousPage}>
              Previous
            </button>
            <button type="submit"
                    className="ml-3 btn btn-primary"
                    disabled={pristine || submitting}>
              Submit
            </button>
          </div>
        </form>
      </article>
    );
  }
}

RecordSummary = connect(
  ({form}) => ({wizardData: form.wizard.values})
)(RecordSummary);

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(RecordSummary);