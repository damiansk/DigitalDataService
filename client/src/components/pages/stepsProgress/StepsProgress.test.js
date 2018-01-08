import React from 'react';
import { mount } from 'enzyme';
import StepsProgress from './StepsProgress';

describe('<StepsProgress/>', () => {
  
  it('renders without crashing', () => {
    mount(<StepsProgress currentStep={0} stepsList={['test']}/>);
  });
  
  it('renders correct count of steps', () => {
    const stepsList = ['First', 'Second', 'Third'];
    const wrapper = mount(<StepsProgress currentStep={0} stepsList={stepsList}/>);
    
    expect(wrapper.find('a')).toHaveLength(stepsList.length);
  });
  
  it('renders correct count of active steps', () => {
    const stepsList = ['First', 'Second', 'Third', 'Fourth'];
    const currentStep = 2;
    const wrapper = mount(<StepsProgress currentStep={currentStep} stepsList={stepsList}/>);
    
    expect(wrapper.find('.active')).toHaveLength(currentStep + 1);
  })
  
});
