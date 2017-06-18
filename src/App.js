import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import LoadingPage from './pages/LoadingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

import ActivityPage from './pages/ActivityPage';
import CalendarPage from './pages/CalendarPage';
import InvitationsPage from './pages/InvitationsPage';
import ProfilePage from './pages/ProfilePage';

import BottomTabBar from './components/BottomTabBar';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import sessionActions from './actions/sessionActions';
import uiActions from './actions/uiActions';

function ActivePageForTab(props) {
  if (props.tab === 'activity') {
    return <ActivityPage/>;
  } else if (props.tab === 'calendar') {
    return <CalendarPage/>
  } else if (props.tab === 'invitations') {
    return <InvitationsPage/>
  } else if (props.tab === 'profile') {
    return <ProfilePage/>
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tab: 'activity' }
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(tab) {
    this.setState({ tab });
  }

  render() {
    if (this.props.state.sessionState.user) {
      return (
        <View style={styles.container}>
          <ActivePageForTab tab={this.state.tab}/>
          <BottomTabBar activeTab={this.state.tab} onTabChange={this.handleTabChange}/>
        </View>
      )
    } else if (this.props.state.uiState.page === 'login') {
      return (
        <View style={styles.container}>
          <LoginPage/>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <SignupPage/>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default connect(state => ({
    state
  }),
  dispatch => ({
    sessionActions: bindActionCreators(sessionActions, dispatch),
    uiActions: bindActionCreators(uiActions, dispatch)
  })
)(App);