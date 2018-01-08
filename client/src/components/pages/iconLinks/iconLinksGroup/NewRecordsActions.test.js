import React from 'react';
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme';
import NewRecordsActions from './NewRecordsActions';

describe('<NewRecordsActions/>', () => {
  
  it('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <NewRecordsActions id="10"/>
      </MemoryRouter>
    );
  });
  
  it('contains correct incons count', () => {
    const wrapper = mount(
      <MemoryRouter>
        <NewRecordsActions id="10"/>
      </MemoryRouter>
    );
    
    expect(wrapper.find('i')).toHaveLength(4);
  })
  
});
