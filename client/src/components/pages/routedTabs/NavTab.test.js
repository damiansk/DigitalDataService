import React from 'react';
import { mount } from 'enzyme';
import NavTab from './NavTab';
import { MemoryRouter } from 'react-router';

describe('<NavTab/>', () => {
  
  it('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <NavTab path="simple/path"/>
      </MemoryRouter>
    );
  });
  
  it('contain correct tag a with passed link', () => {
    const link = 'simple/path';
    const wrapper = mount(
      <MemoryRouter>
        <NavTab path={link}/>
      </MemoryRouter>
    );
    
    expect(wrapper.find('a').html()).toContain(link);
  });
  
  it('contain correct text passed to him', () => {
    const text = 'Test';
    const wrapper = mount(
      <MemoryRouter>
        <NavTab path="simple/path">{text}</NavTab>
      </MemoryRouter>
    );
    
    expect(wrapper.find('a').html()).toContain(text);
  });
  
});
