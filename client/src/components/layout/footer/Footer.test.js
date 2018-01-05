import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';

describe('<Footer/>', () => {
  
  it('renders without crashing', () => {
    mount(<Footer />);
  });
  
  
  it('contains address tag with information about author', () => {
    const wrapper = shallow(<Footer/>);
    const addressTag = 'address';
    const author = 'Stolarek Damian';
    
    expect(wrapper.find(addressTag).html()).toContain(author);
  });
  
  it('contains link to github account', () => {
    const wrapper = shallow(<Footer/>);
    
    expect(wrapper.find('[href="https://github.com/damiansk"]')).toHaveLength(1);
  });
  
});
