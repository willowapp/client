import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import HeaderNav from '../HeaderNav';
import PostList from '../PostList';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderNav/>
        <PostList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});