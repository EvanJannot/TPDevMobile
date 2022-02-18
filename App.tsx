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
import AuthForm from './components/AuthForm'
import UserService from './services/authentication.service'

export default class App extends Component<{}, {}> {
  displayAlert = (text: string) => {
    Alert.alert('Action Sélectionnée', text)
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.koala} source={require('./assets/koala.png')} />
        <AuthForm />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  koala: {
    width: 140,
    height: 120,
    marginBottom: 25,
  },
})
