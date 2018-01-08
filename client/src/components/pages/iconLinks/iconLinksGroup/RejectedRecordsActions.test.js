import React from 'react';
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme';
import RejectedRecordsActions from './RejectedRecordsActions';

describe('<RejectedRecordsActions/>', () => {
  
  it('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <RejectedRecordsActions id="10"/>
      </MemoryRouter>
    );
  });
  
  it('contains correct incons count', () => {
    const wrapper = mount(
      <MemoryRouter>
        <RejectedRecordsActions id="10"/>
      </MemoryRouter>
    );
    
    expect(wrapper.find('i')).toHaveLength(3);
  })
  
});
