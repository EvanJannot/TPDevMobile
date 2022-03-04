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
import { User } from './services/authentication.service'
import ModuleList from './Components/ModuleList'

interface classState {
  currentUser: User | null
}

export default class App extends Component<{}, classState> {
  state: classState = { currentUser: null }
  displayAlert = (text: string) => {
    Alert.alert('Action Sélectionnée', text)
  }

  connect = (loggedUser: User) => {
    this.setState({ currentUser: loggedUser })
  }

  render() {
    const logged = !this.state.currentUser ? (
      <AuthForm onConnection={this.connect} />
    ) : null
    const modules = this.state.currentUser ? <ModuleList /> : null
    return (
      <View style={styles.container}>
        {logged}
        {modules}
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
