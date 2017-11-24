import React, { Component } from 'react';

import Heading from '../../../components/pages/heading/Heading';
import StepsProgress from '../../../components/pages/stepsProgress/StepsProgress';
import RecordInformation from './recordInformation/RecordInformation';
import RecordFiles from './recordFiles/RecordFiles';
import RecordSummary from './recordSummary/RecordSummary';

import './NewRecord.css';

class NewRecord extends Component {
  
  PREVIOUS = -1;
  NEXT = 1;
  
  constructor(props) {
    super(props);
    
    this.state = {
      currentStep: 'general',
      stepsList: [
        {id: 'general', title: 'General information'},
        {id: 'files', title: 'Attached files'},
        {id: 'summary', title: 'Summary'}
      ]
    };
    
    this.prevStep = this.prevStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.setStep = this.setStep.bind(this);
  }
  
  prevStep() {
    this.setStep(this.PREVIOUS);
  }
  
  nextStep() {
    this.setStep(this.NEXT);
  }
  
  setStep(type) {
    const { currentStep, stepsList } = this.state;
    const prevIndex = stepsList.findIndex(step => step.id === currentStep) + type;
    const step = stepsList[prevIndex].id;
  
    if (step) {
      this.setState({
        currentStep: step
      });
    }
  }
  
  onSubmit() {
  
  }
  
  generateStep(currentStep) {
    switch(currentStep) {
      case 'general':
        return <RecordInformation onSubmit={this.nextStep}/>;
      case 'files':
        return <RecordFiles previousPage={this.prevStep} onSubmit={this.nextStep}/>;
      case 'summary':
        return <RecordSummary previousPage={this.prevStep} onSubmit={this.onSubmit}/>;
      default:
        return <div>Error...</div>
    }
  }
  
  render() {
    const { currentStep, stepsList } = this.state;
    
    return (
      <div>
        <Heading title="New record"/>
        <StepsProgress stepsList={stepsList} currentStep={currentStep} />
        {this.generateStep(currentStep)}
      </div>
    )
  }
}

export default NewRecord;