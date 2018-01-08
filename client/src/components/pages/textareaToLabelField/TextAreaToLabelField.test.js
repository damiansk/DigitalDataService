import React from 'react';
import { mount } from 'enzyme';
import TextAreaToLabelField from './TextAreaToLabelField';

describe('<TextAreaToLabelField/>', () => {
  
  it('renders without crashing', () => {
    mount(<TextAreaToLabelField meta={{}}/>);
  });
  
  it('renders text area', () => {
    const wrapper = mount(<TextAreaToLabelField meta={{}}/>);
    
    expect(wrapper.find('textarea')).toBeTruthy();
  });
  
  it('renders disabled text area', () => {
    const wrapper = mount(<TextAreaToLabelField activeEditing={false} meta={{}}/>);
    
    expect(wrapper.find('textarea').html()).toContain('disabled');
  });
  
});
