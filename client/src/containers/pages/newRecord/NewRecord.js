import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { destroy } from 'redux-form';

import { saveRecord } from '../../../actions/records';
import PrimaryHeading from '../../../components/pages/heading/PrimaryHeading';
import StepsProgress from '../../../components/pages/stepsProgress/StepsProgress';
import RecordGeneralInformation from './recordInformation/RecordGeneralInformation';
import RecordFiles from './recordFiles/RecordFiles';
import RecordSummary from './recordSummary/RecordSummary';


class NewRecord extends Component {
  
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
  
  componentWillUnmount() {
    this.props.destroy('wizard');
  }
  
  prevStep() {
    this.setState(({currentStep}) => ({currentStep: currentStep - 1}));
  }
  
  nextStep() {
    this.setState(({currentStep}) => ({currentStep: currentStep + 1}));
  }
  
  onSubmit(values) {
    this.props.saveRecord(values);
  }
  
  render() {
    const { currentStep } = this.state;
    
    return (
      <section>
        <PrimaryHeading title="New record"/>
        <StepsProgress stepsList={this.stepsList.map(({title}) => title)} currentStep={currentStep} />
        { this.stepsList[currentStep].component }
      </section>
    )
  }
}

export default connect(null, {destroy, saveRecord})(NewRecord);