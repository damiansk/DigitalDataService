import React from 'react';
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme';
import RejectIconLink from './RejectIconLink';
import { mapPathVariables, RECORD_UPDATE_STATUS } from '../../../constants/routes';

describe('<RejectIconLink/>', () => {
  
  it('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <RejectIconLink recordId="10"/>
      </MemoryRouter>
    );
  });
  
  it('have tag with correct url in href attribute', () => {
    const recordId = '20';
    const path = mapPathVariables(RECORD_UPDATE_STATUS, {recordId, newStatus: 'reject'});
    const wrapper = mount(
      <MemoryRouter>
        <RejectIconLink recordId={recordId}/>
      </MemoryRouter>
    );
    
    expect(wrapper.find('a').prop('href')).toContain(path);
  });
  
  it('render correct icon', () => {
    const iconClass = 'fa-ban';
    const wrapper = mount(
      <MemoryRouter>
        <RejectIconLink recordId="20"/>
      </MemoryRouter>
    );
    
    expect(wrapper.find('i').hasClass(iconClass)).toBeTruthy();
  })
  
});
