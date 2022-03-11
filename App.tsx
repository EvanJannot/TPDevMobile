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

export default class App extends Component<{}, {}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Salut</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
  },
})
