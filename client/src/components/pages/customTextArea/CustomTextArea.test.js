import React from 'react';
import { shallow, mount } from 'enzyme';
import CustomTextArea from './CustomTextArea';

describe('<CustomTextArea/>', () => {
  
  it('renders without crashing', () => {
    mount(<CustomTextArea meta={{}} />);
  });
  
  it('render textarea element', () => {
    const wrapper = shallow(<CustomTextArea meta={{}} />);
    
    expect(wrapper.find('textarea')).toBeTruthy();
  });
  
  it('render label element with correct text', () => {
    const labelText = 'Simple text';
    const wrapper = shallow(<CustomTextArea label={labelText} meta={{}} />);
    
    expect(wrapper.find('label').html()).toContain(labelText);
  });
  
});
