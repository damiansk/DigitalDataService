import React from 'react';
import { MemoryRouter } from 'react-router'
import { shallow, mount } from 'enzyme';
import DeleteIconLink from './DeleteIconLink';
import { mapPathVariables, RECORD_UPDATE_STATUS } from '../../../constants/routes';

describe('<DeleteIconLink/>', () => {
  
  it('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <DeleteIconLink recordId="10"/>
      </MemoryRouter>
    );
  });
  
  it('have tag with correct url in href attribute', () => {
    const recordId = '20';
    const path = mapPathVariables(RECORD_UPDATE_STATUS, {recordId, newStatus: 'delete'});
    const wrapper = mount(
      <MemoryRouter>
        <DeleteIconLink recordId={recordId}/>
      </MemoryRouter>
    );
    
    expect(wrapper.find('a').prop('href')).toContain(path);
  });
  
  it('render correct icon', () => {
    const iconClass = 'fa-trash-o';
    const wrapper = mount(
      <MemoryRouter>
        <DeleteIconLink recordId="20"/>
      </MemoryRouter>
    );
    
    expect(wrapper.find('i').hasClass(iconClass)).toBeTruthy();
  })
  
});
