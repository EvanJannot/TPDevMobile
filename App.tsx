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
import ModuleList from './components/ModuleList'

export default class App extends Component<{}, {}> {
  displayAlert = (text: string) => {
    Alert.alert('Action Sélectionnée', text)
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Image style={styles.koala} source={require('./assets/koala.png')} />
        <AuthForm /> */}
        <ModuleList />
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
  koala: {
    width: 140,
    height: 120,
    marginBottom: 25,
  },
})
