import React from 'react';
import { MemoryRouter } from 'react-router'
import { shallow, mount } from 'enzyme';
import AcceptIconLink from './AcceptIconLink';
import { mapPathVariables, RECORD_UPDATE_STATUS } from '../../../constants/routes';

describe('<AcceptIconLink/>', () => {
  
  it('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <AcceptIconLink recordId="10"/>
      </MemoryRouter>
    );
  });
  
  it('have tag with correct url in href attribute', () => {
    const recordId = '20';
    const path = mapPathVariables(RECORD_UPDATE_STATUS, {recordId, newStatus: 'accept'});
    const wrapper = mount(
      <MemoryRouter>
        <AcceptIconLink recordId={recordId}/>
      </MemoryRouter>
    );
  
    expect(wrapper.find('a').prop('href')).toContain(path);
  });
  
  it('render correct icon', () => {
    const iconClass = 'fa-check-square-o';
    const wrapper = mount(
      <MemoryRouter>
        <AcceptIconLink recordId="20"/>
      </MemoryRouter>
    );
  
    expect(wrapper.find('i').hasClass(iconClass)).toBeTruthy();
  })
  
});
