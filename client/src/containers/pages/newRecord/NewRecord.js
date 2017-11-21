import React, { Component } from 'react';

import Heading from '../../../components/pages/heading/Heading';
import WizardNavigation from '../../../components/pages/wizardNavigation/WizardNavigation';

import './NewRecord.css';

class NewRecord extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      steps: {
        currentActive: 'general',
        idList: ['general', 'files', 'summary'],
        stepsList: {
          'general': {title: 'General information', isActive: true},
          'files': {title: 'Attached files', isActive: true},
          'summary': {title: 'Summary', isActive: false}
        }
      }
    }
  }
  
  
  render() {
    const { idList, stepsList } = this.state.steps;
    
    return (
      <div>
        <Heading title="New record"/>
        <WizardNavigation idList={idList} stepsList={stepsList} />
        
      </div>
    )
  }
}

export default NewRecord;