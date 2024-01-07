import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);

it('renders without crashing', () => {
  shallow(<App />);
});
// OR
// describe('App component', () => {
//   it('contains the Notifications component', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('Notifications')).toHaveLength(1); // Assuming Notifications is a named component
//   });

//   it('contains the Header component', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('Header')).toHaveLength(1); // Assuming Header is a named component
//   });

//   it('contains the Login component', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('Login')).toHaveLength(1); // Assuming Login is a named component
//   });

//   it('contains the Footer component', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('Footer')).toHaveLength(1); // Assuming Footer is a named component
//   });
// });
