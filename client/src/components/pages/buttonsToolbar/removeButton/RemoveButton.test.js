import React from 'react';
import { shallow, mount } from 'enzyme';
import RemoveButton from './RemoveButton';

describe('<RemoveButton/>', () => {
  
  it('renders without crashing', () => {
    mount(<RemoveButton  onRemove={() => {}}/>);
  });
  
  it('run attached function after click', () => {
    const onRemove = jest.fn();
    const wrapper = shallow(<RemoveButton  onRemove={onRemove}/>);
    
    wrapper.find('button').simulate('click');
    expect(onRemove).toBeCalled();
  });
  
  it('contains right text', () => {
    const removeText = 'Remove item';
    const wrapper = shallow(
      <RemoveButton  onRemove={() => {}}>{removeText}</RemoveButton>
    );
    
    expect(wrapper.find('button').html()).toContain(removeText);
  });
  
});
