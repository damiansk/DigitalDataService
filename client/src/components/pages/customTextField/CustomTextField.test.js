import React from 'react';
import { shallow, mount } from 'enzyme';
import CustomTextField from './CustomTextField';

describe('<CustomTextField/>', () => {
  
  it('renders without crashing', () => {
    mount(<CustomTextField meta={{}} label="sth" type="text"/>);
  });
  
  it('render input element', () => {
    const wrapper = shallow(<CustomTextField meta={{}} label="sth" type="text"/>);
    
    expect(wrapper.find('input')).toBeTruthy();
  });
  
  it('set input type to passed', () => {
    const type = "password";
    const wrapper = shallow(<CustomTextField label="sth" meta={{}} type={type}/>);
    
    expect(wrapper.find(`input[type="${type}"]`)).toBeTruthy();
  });
  
  it('render label element with correct text', () => {
    const labelText = 'Simple text';
    const wrapper = shallow(<CustomTextField label={labelText} meta={{}} type="text"/>);
    
    expect(wrapper.find('label').html()).toContain(labelText);
  });
  
});
