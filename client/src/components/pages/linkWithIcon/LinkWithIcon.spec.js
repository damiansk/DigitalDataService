import LinkWithIcon from './LinkWithIcon';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<LinkWithIcon />', function () {
  
  it('renders a link <a>', () => {
    const renderedComponent = shallow(
      <LinkWithIcon />
    );
    
    expect(renderedComponent.find('a').node)
      .toExist();
  });
  
  
});