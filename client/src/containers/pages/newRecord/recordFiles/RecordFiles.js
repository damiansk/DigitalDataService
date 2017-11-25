import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { incrementFilesCount } from '../../../../actions/wizard';

import SecondaryHeading from '../../../../components/pages/heading/SecondaryHeading';
import CustomDropzone from '../../../../components/pages/customDropzone/CustomDropzone';

class RecordFiles extends Component {

  constructor(props) {
    super(props);
    
    this.firstTitle = "Attach files";
    this.secondTitle = "Attached files";
    
  }
  
  render() {
    const {
      handleSubmit,
      previousPage,
      filesCount,
      incrementFilesCount
    } = this.props;
    
    
    return (
      <article className="container">
        <SecondaryHeading title={this.firstTitle}/>
        <form>
          <Field name={`file-${filesCount}`} onNewFile={() => incrementFilesCount()} component={CustomDropzone}/>
        </form>
        <SecondaryHeading title={this.secondTitle}/>
        <form onSubmit={handleSubmit}>
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

const mapDispatchToProps = dispatch => bindActionCreators({ incrementFilesCount }, dispatch);
const mapStateToProps = ({wizard: {filesCount}}) => ({filesCount});

RecordFiles = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordFiles);


export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(RecordFiles);
