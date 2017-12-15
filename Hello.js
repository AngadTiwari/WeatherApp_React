import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'

import { ACTION_TYPE, selectDrawerOption, selectCity } from './redux/Actions'
import weatherReducer from './redux/Reducers'
import initStore from './redux/Store'
import { connect } from 'react-redux'
import { createStore } from 'redux'

class Hello extends Component {

  constructor(props) {
    super(props);
    this.props._props_dispatch_selectCity("london")
    this.props._props_dispatch_selectOption("Randy orton")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.props.appData.option}
        </Text>
        <Text style={styles.instructions}>
          {this.props.appData.city}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

/**
 * mapStateToProps() mapDispatchToProps() functions declaration to bind {actions,reducers,store} to REACT-COMPONENT
 */
function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    _props_dispatch_selectOption: (option) => dispatch(selectDrawerOption(option)),
    _props_dispatch_selectCity: (city) => dispatch(selectCity(city)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Hello)
