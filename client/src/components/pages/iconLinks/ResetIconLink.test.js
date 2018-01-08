import React from 'react';
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme';
import ResetIconLink from './ResetIconLink';
import { mapPathVariables, RECORD_UPDATE_STATUS } from '../../../constants/routes';

describe('<ResetIconLink/>', () => {
  
  it('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <ResetIconLink recordId="10"/>
      </MemoryRouter>
    );
  });
  
  it('have tag with correct url in href attribute', () => {
    const recordId = '20';
    const path = mapPathVariables(RECORD_UPDATE_STATUS, {recordId, newStatus: 'restore'});
    const wrapper = mount(
      <MemoryRouter>
        <ResetIconLink recordId={recordId}/>
      </MemoryRouter>
    );
    
    expect(wrapper.find('a').prop('href')).toContain(path);
  });
  
  it('render correct icon', () => {
    const iconClass = 'fa-repeat';
    const wrapper = mount(
      <MemoryRouter>
        <ResetIconLink recordId="20"/>
      </MemoryRouter>
    );
    
    expect(wrapper.find('i').hasClass(iconClass)).toBeTruthy();
  })
  
});
