import React from 'react';
import { mount } from 'enzyme';
import TableColumn from './TableColumn';

describe('<TableColumn/>', () => {
  
  it('renders without crashing', () => {
    mount(
      <table>
        <tbody>
          <tr>
            <TableColumn fieldSelector="selector"/>
          </tr>
        </tbody>
      </table>
    );
  });
  
  it('renders passed content', () => {
    const content = "Sth";
    const wrapper = mount(
      <table>
        <tbody>
          <tr>
            <TableColumn fieldSelector="selector">{content}</TableColumn>
          </tr>
        </tbody>
      </table>
    );
    
    expect(wrapper.html()).toContain(content);
  });
  
});
