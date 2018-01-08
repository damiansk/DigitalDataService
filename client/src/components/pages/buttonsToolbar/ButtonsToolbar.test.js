import React from 'react';
import { shallow, mount } from 'enzyme';
import ButtonsToolbar from './ButtonsToolbar';
import RemoveButton from './removeButton/RemoveButton';

describe('<ButtonsToolbar/>', () => {
  
  it('renders without crashing', () => {
    mount(<ButtonsToolbar />);
  });
  
  it('render passed element', () => {
    const removeButton = <RemoveButton onRemove={() => {}}/>;
    const wrapper = shallow(
      <ButtonsToolbar>{removeButton}</ButtonsToolbar>
    );
    
    expect(wrapper.contains(removeButton)).toBeTruthy();
  });
  
});
