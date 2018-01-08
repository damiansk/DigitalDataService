import React from 'react';
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme';
import ReportedRecordsActions from './ReportedRecordsActions';

describe('<ReportedRecordsActions/>', () => {
  
  it('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <ReportedRecordsActions id="10"/>
      </MemoryRouter>
    );
  });
  
  it('contains correct incons count', () => {
    const wrapper = mount(
      <MemoryRouter>
        <ReportedRecordsActions id="10"/>
      </MemoryRouter>
    );
    
    expect(wrapper.find('i')).toHaveLength(4);
  })
  
});
