import React from 'react';
import { shallow, mount } from 'enzyme';
import SecondaryHeading from './SecondaryHeading';

describe('<SecondaryHeading/>', () => {
  
  it('renders without crashing', () => {
    mount(<SecondaryHeading title="Test"/>);
  });
  
  it('contains correct tag elements', () => {
    const wrapper = mount(<SecondaryHeading title="Test"/>);
    
    expect(wrapper.find('header')).toBeTruthy();
    expect(wrapper.find('h3')).toBeTruthy();
  });
  
  it('render right text', () => {
    const headerText = 'Test';
    const wrapper = shallow(<SecondaryHeading title={headerText}/>);
    
    expect(wrapper.find('h3').html()).toContain(headerText)
  });
  
  it('added passed class to header tag', () => {
    const testClass = 'test';
    const wrapper = shallow(<SecondaryHeading className={testClass} title="Tets"/>);
    
    expect(wrapper.find(`header.${testClass}`)).toBeTruthy();
  });
  
});
