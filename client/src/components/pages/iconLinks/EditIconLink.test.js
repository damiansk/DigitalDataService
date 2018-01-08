import React from 'react';
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme';
import EditIconLink from './EditIconLink';
import { mapPathVariables, RECORD_EDIT } from '../../../constants/routes';

describe('<EditIconLink/>', () => {
  
  it('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <EditIconLink recordId="10"/>
      </MemoryRouter>
    );
  });
  
  it('have tag with correct url in href attribute', () => {
    const recordId = '20';
    const path = mapPathVariables(RECORD_EDIT, {id: recordId});
    const wrapper = mount(
      <MemoryRouter>
        <EditIconLink recordId={recordId}/>
      </MemoryRouter>
    );
    
    expect(wrapper.find('a').prop('href')).toContain(path);
  });
  
  it('render correct icon', () => {
    const iconClass = 'fa-pencil-square-o';
    const wrapper = mount(
      <MemoryRouter>
        <EditIconLink recordId="20"/>
      </MemoryRouter>
    );
    
    expect(wrapper.find('i').hasClass(iconClass)).toBeTruthy();
  })
  
});
