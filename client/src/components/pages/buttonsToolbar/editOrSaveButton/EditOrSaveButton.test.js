import React from 'react';
import { shallow, mount } from 'enzyme';
import EditOrSaveButton from './EditOrSaveButton';

describe('<EditOrSaveButton/>', () => {
  
  it('renders without crashing', () => {
    mount(<EditOrSaveButton />);
  });
  
  it('is set to edit', () => {
    const wrapper = shallow(<EditOrSaveButton isTextEnable={true} isEdited={false}/>);
    const editClass = '.fa-pencil';
    const buttonText = 'Edit';
    const buttonClassName = 'btn-outline-primary';
    
    expect(wrapper.find(editClass)).toHaveLength(1);
    expect(wrapper.find('button').html()).toContain(buttonText);
    expect(
      wrapper.find('button').first().hasClass(buttonClassName)
    ).toBeTruthy();
  });
  
  it('is set to save', () => {
    const wrapper = shallow(<EditOrSaveButton onSave={() => {}}
                                              onEdit={() => {}}
                                              isTextEnable={true}
                                              isEdited={true}/>);
    const editClass = '.fa-floppy-o';
    const buttonText = 'Save';
    const buttonClassName = 'btn-outline-success';
    
    
    expect(wrapper.find(editClass)).toHaveLength(1);
    expect(wrapper.find('button').html()).toContain(buttonText);
    expect(
      wrapper.find('button').first().hasClass(buttonClassName)
    ).toBeTruthy();
  });
  
  it('called save function', () => {
    const saveFunc = jest.fn();
    const wrapper = shallow(<EditOrSaveButton onEdit={() => {}}
                                              onSave={saveFunc}
                                              isEdited={true}/>);
  
    wrapper.find('button').simulate('click');
    expect(saveFunc).toBeCalled();
  });
  
  it('called save function', () => {
    const editFunc = jest.fn();
    const wrapper = shallow(<EditOrSaveButton onSave={() => {}}
                                              onEdit={editFunc}
                                              isEdited={false}/>);
    
    wrapper.find('button').simulate('click');
    expect(editFunc).toBeCalled();
  });
  
});
