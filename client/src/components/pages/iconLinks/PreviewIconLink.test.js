import React from 'react';
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme';
import PreviewIconLink from './PreviewIconLink';
import { mapPathVariables, RECORD_PREVIEW } from '../../../constants/routes';

describe('<PreviewIconLink/>', () => {
  
  it('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <PreviewIconLink recordId="10"/>
      </MemoryRouter>
    );
  });
  
  it('have tag with correct url in href attribute', () => {
    const recordId = '20';
    const path = mapPathVariables(RECORD_PREVIEW, {id: recordId});
    const wrapper = mount(
      <MemoryRouter>
        <PreviewIconLink recordId={recordId}/>
      </MemoryRouter>
    );
    
    expect(wrapper.find('a').prop('href')).toContain(path);
  });
  
  it('render correct icon', () => {
    const iconClass = 'fa-eye';
    const wrapper = mount(
      <MemoryRouter>
        <PreviewIconLink recordId="20"/>
      </MemoryRouter>
    );
    
    expect(wrapper.find('i').hasClass(iconClass)).toBeTruthy();
  })
  
});
