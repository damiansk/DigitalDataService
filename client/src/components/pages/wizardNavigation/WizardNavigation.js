import React from 'react';
import PropTypes from 'prop-types';

const WizardNavigation = ({idList, stepsList}) => (
  <nav className="wizard-bar">
    {idList.map((id, index) =>
      <a key={index}
         className={`wizard-step ${stepsList[id].isActive ? 'active' : ''}`}>
        {stepsList[id].title}
      </a>
    )}
  </nav>
);

WizardNavigation.propTypes = {
  idList: PropTypes.array.isRequired,
  stepsList: PropTypes.object.isRequired
};

export default WizardNavigation;