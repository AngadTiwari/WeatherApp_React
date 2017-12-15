/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'

import initStore from './redux/Store'
import Hello from './Hello'

const appStore = initStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <Hello />
      </Provider>
    )
  }
}
