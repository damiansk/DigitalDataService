import React from 'react';
import { shallow, mount } from 'enzyme';
import PrimaryHeading from './PrimaryHeading';

describe('<PrimaryHeading/>', () => {
  
  it('renders without crashing', () => {
    mount(<PrimaryHeading title="Test"/>);
  });
  
  it('contains correct tag elements', () => {
    const wrapper = shallow(<PrimaryHeading title="Test"/>);
    
    expect(wrapper.find('header')).toBeTruthy();
    expect(wrapper.find('h1')).toBeTruthy();
  });
  
  it('render right text', () => {
    const headerText = 'Test';
    const wrapper = shallow(<PrimaryHeading title={headerText}/>);
    
    expect(wrapper.find('h1').html()).toContain(headerText)
  });
  
  it('added passed class to header tag', () => {
    const testClass = 'test';
    const wrapper = shallow(<PrimaryHeading className={testClass} title="Tets"/>);
    
    expect(wrapper.find(`header.${testClass}`)).toBeTruthy();
  });
  
});
