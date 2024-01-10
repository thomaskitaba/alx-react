import { shallow, mount} from 'enzyme';
import React from 'react';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
  });

  it('contain Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('contain Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('contain Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('contain Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('CourseList', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it('isLoggedIn true', () => {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find('Login')).toHaveLength(0);
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });
});
describe('YourComponent', () => {
  test('should describe what your test is verifying', () => {
    // Arrange: Set up any necessary variables, mocks, or render the component
    // For example:
    const mockFunction = jest.fn();
    global.alert = jest.fn(); // Mock the global alert function if used

    // Act: Trigger actions/events on the component
    // For example:
    const { container } = render(<YourComponent yourProp={mockFunction} />); // Render your component with props

    fireEvent.keyDown(container.firstChild, {
      key: 'h',
      ctrlKey: true,
    }); // Simulate the event you want to test

    // Assert: Verify the expected behavior
    // For example:
    expect(mockFunction).toHaveBeenCalled(); // Check if the function was called
    expect(global.alert).toHaveBeenCalledWith('Expected Alert Message'); // Check for alert message
    // Add more assertions as needed for your test case
  });
});