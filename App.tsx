// set PATH=%PATH%;%APPDATA%\npm

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native'
import HomeScreen from './components/HomeScreen'

export default class App extends Component<{}, {}> {
  render() {
    return <HomeScreen />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    marginTop: 40,
  },
})
