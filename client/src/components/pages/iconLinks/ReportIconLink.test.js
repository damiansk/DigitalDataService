import React from 'react';
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme';
import ReportIconLink from './ReportIconLink';
import { mapPathVariables, RECORD_UPDATE_STATUS } from '../../../constants/routes';

describe('<ReportIconLink/>', () => {
  
  it('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <ReportIconLink recordId="10"/>
      </MemoryRouter>
    );
  });
  
  it('have tag with correct url in href attribute', () => {
    const recordId = '20';
    const path = mapPathVariables(RECORD_UPDATE_STATUS, {recordId, newStatus: 'report'});
    const wrapper = mount(
      <MemoryRouter>
        <ReportIconLink recordId={recordId}/>
      </MemoryRouter>
    );
    
    expect(wrapper.find('a').prop('href')).toContain(path);
  });
  
  it('render correct icon', () => {
    const iconClass = 'fa-paper-plane-o';
    const wrapper = mount(
      <MemoryRouter>
        <ReportIconLink recordId="20"/>
      </MemoryRouter>
    );
    
    expect(wrapper.find('i').hasClass(iconClass)).toBeTruthy();
  })
  
});
