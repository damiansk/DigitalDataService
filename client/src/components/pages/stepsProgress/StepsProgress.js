import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './StepProgress.css';

class StepsProgress extends Component {
  
  render() {
    const { stepsList, currentStep } = this.props;
    
    const activeList = stepsList.slice(0, currentStep + 1);
    const inactiveList = stepsList.slice(currentStep + 1);
  
    return (
      <nav className="wizard-bar">
        {activeList.map((title, index) =>
          <a style={{width: `${100 / stepsList.length}%`}}
             className='wizard-step active'
             key={index}>{title}</a>
        )}
        {inactiveList.map((title, index) =>
          <a style={{width: `${100 / stepsList.length}%`}}
             className='wizard-step'
             key={index}>{title}</a>
        )}
      </nav>
    )
  }
}

StepsProgress.propTypes = {
  stepsList: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired
};

export default StepsProgress;