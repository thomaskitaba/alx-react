import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];
const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(e) {
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault();
      alert('Logging you out');
      this.props.logout();
    }
  }
  static defaultProps = {
    isLoggedIn: false,
    logout: () => {},
  };

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logout: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleLogout);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleLogout);
  }
  render() {
    const { isLoggedIn } = this.props;
    return (
      <Fragment>
        <Notifications listNotifications={listNotifications} />
        <Header />
        {isLoggedIn ? (<BodySectionWithMarginBottom title='Course list'> <CourseList listCourses={listCourses} />
        </BodySectionWithMarginBottom> ) : (<BodySectionWithMarginBottom><Login /></BodySectionWithMarginBottom>)}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
