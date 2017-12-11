import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './StepProgress.css';

class StepsProgress extends Component {
  
  render() {
    const { stepsList, currentStep } = this.props;
    const currentStepId = stepsList.findIndex(step => step.id === currentStep);
    
    const activeList = stepsList.slice(0, currentStepId + 1);
    const inactiveList = stepsList.slice(currentStepId + 1);
    
    return (
      <nav className="wizard-bar">
        {activeList.map(({id, title}, index) =>
          <a key={index} className='wizard-step active'>{title}</a>
        )}
        {inactiveList.map(({id, title}, index) =>
          <a key={index} className='wizard-step'>{title}</a>
        )}
      </nav>
    )
  }
}

StepsProgress.propTypes = {
  stepsList: PropTypes.array.isRequired,
  currentStep: PropTypes.string.isRequired
};

export default StepsProgress;