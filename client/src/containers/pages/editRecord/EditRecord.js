import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destroy } from 'redux-form';

import { fetchRecord, updateRecord, removeActiveRecord } from '../../../actions/record';
import PrimaryHeading from '../../../components/pages/heading/PrimaryHeading';
import StepsProgress from '../../../components/pages/stepsProgress/StepsProgress';
import RecordGeneralInformation from '../newRecord/recordInformation/RecordGeneralInformation';
import RecordFiles from '../newRecord/recordFiles/RecordFiles';
import RecordSummary from '../newRecord/recordSummary/RecordSummary';


class EditRecord extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {currentStep: 0};
    
    this.onSubmit = this.onSubmit.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
  
    this.stepsList = [
      {
        component: <RecordGeneralInformation onSubmit={this.nextStep}/>,
        title: 'General information'
      },
      {
        component: <RecordFiles previousPage={this.prevStep} onSubmit={this.nextStep}/>,
        title: 'Attached files'
      },
      {
        component: <RecordSummary previousPage={this.prevStep} onSubmit={this.onSubmit}/>,
        title: 'Summary'
      }
    ];
  }
  
  componentWillMount() {
    this.props.fetchRecord(this.props.match.params.id);
  }
  
  componentWillUnmount() {
    this.props.destroy('wizard');
    this.props.removeActiveRecord();
  }
  
  prevStep() {
    this.setState(({currentStep}) => ({currentStep: currentStep - 1}));
  }
  
  nextStep() {
    this.setState(({currentStep}) => ({currentStep: currentStep + 1}));
  }
  
  onSubmit(values) {
    // values.keywords = values.keywords.join(' ');
    console.log(values);
    this.props.updateRecord(values);
  }
  
  render() {
    const { currentStep } = this.state;
    
    return (
      <section>
        <PrimaryHeading title="Edit record"/>
        <StepsProgress stepsList={this.stepsList.map(({title}) => title)} currentStep={currentStep} />
        { this.stepsList[currentStep].component }
      </section>
    )
  }
}

export default connect(
  null,
  {destroy, updateRecord, fetchRecord, removeActiveRecord}
)(EditRecord);