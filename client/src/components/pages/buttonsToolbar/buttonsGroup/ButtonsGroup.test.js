import React from 'react';
import { shallow, mount } from 'enzyme';
import ButtonsGroup from './ButtonsGroup';

describe('<ButtonsGroup/>', () => {
  
  it('renders without crashing', () => {
    mount(<ButtonsGroup  label='sth'/>);
  });
  
  it('contains attached button', () => {
    const saveButton = <button>Save</button>;
    const wrapper = shallow(
      <ButtonsGroup label='sth'>
        {saveButton}
      </ButtonsGroup>
    );
    
    expect(wrapper.contains(saveButton)).toBeTruthy();
  });
  
  it('contains correct buttons count', () => {
    const wrapper = shallow(
      <ButtonsGroup label='sth'>
        <button>Save</button>
        <button>Remove</button>
        <button>Edit</button>
      </ButtonsGroup>
    );
    
    expect(wrapper.find('button')).toHaveLength(3);
  });
  
});
