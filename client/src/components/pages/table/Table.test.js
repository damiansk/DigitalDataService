import React from 'react';
import { mount } from 'enzyme';
import Table from './Table';
import TableColumn from './TableColumn';

describe('<Table/>', () => {
  
  it('renders without crashing', () => {
    mount(<Table data={[]}><TableColumn fieldSelector="id"/></Table>);
  });
  
  it('renders correct message about no content', () => {
    const content = "No data to show";
    const wrapper = mount(<Table data={[]}><TableColumn fieldSelector="id"/></Table>);
    
    expect(wrapper.html()).toContain(content);
  });
  
  it('renders correct amount of columns', () => {
    const columns = [
      <TableColumn fieldSelector="id"/>,
      <TableColumn fieldSelector="name"/>,
      <TableColumn fieldSelector="mail"/>,
    ];
    const wrapper = mount(<Table data={[]}>{columns}</Table>);
    
    expect(wrapper.find('th')).toHaveLength(columns.length);
  });
  
});
