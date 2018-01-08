import React from 'react';
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme';
import AcceptedRecordsActions from './AcceptedRecordsActions';

describe('<AcceptedRecordsActions/>', () => {
  
  it('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <AcceptedRecordsActions id="10"/>
      </MemoryRouter>
    );
  });
  
  it('contains correct incons count', () => {
    const wrapper = mount(
      <MemoryRouter>
        <AcceptedRecordsActions id="10"/>
      </MemoryRouter>
    );
  
    expect(wrapper.find('i')).toHaveLength(3);
  })
  
});
