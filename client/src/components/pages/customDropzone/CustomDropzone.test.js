import React from 'react';
import { mount } from 'enzyme';
import CustomDropzone from './CustomDropzone';

describe('<CustomDropzone/>', () => {
  
  it('renders without crashing', () => {
    mount(<CustomDropzone meta={{}}/>);
  });
  
});
