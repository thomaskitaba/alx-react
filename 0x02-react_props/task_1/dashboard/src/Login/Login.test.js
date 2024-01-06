import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

const wrapper = shallow(<Login />);

it('renders without crashing', () => {
  shallow(<Login />);
});
it('renders login', () => {
  expect(wrapper.find('main.login').exists()).toEqual(true);
});
// tests whether the Login component renders an element with a CSS
// class of login within a <main> element. It uses the wrapper
//  instance created earlier to find elements matching the specified
//  selector (main.login). If the element is found, the test passes
