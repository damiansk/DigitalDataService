import React from 'react';
import { mount } from 'enzyme';
import ImageInputWithPreview from './ImageInputWithPreview';

describe('<ImageInputWithPreview/>', () => {
  
  it('renders without crashing', () => {
    mount(<ImageInputWithPreview/>);
  });
  
  it('contain img tag with passed src', () => {
    const src = 'simple/img.png';
    const wrapper = mount(<ImageInputWithPreview image={src}/>);
    
    expect(wrapper.find('img').html()).toContain(src);
  });
  
  it('contain input tag', () => {
    const inputType = 'file';
    const wrapper = mount(<ImageInputWithPreview/>);
    
    expect(wrapper.find('input').html()).toContain(inputType);
  });
  
});
