/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View
} from 'react-native';

import style from './app/components/style'

import Routs from './app/Routs';

export default class App extends Component {
  render() {
    const { parent } = style
    return(
      <View style={parent}>
        <Routs/>
      </View>
    )
  }
  
}

 