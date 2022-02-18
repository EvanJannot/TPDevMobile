// set PATH=%PATH%;%APPDATA%\npm

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import AuthForm from './components/AuthForm'
import Input from './components/Input'
import UserService from './services/authentication.service'

interface CLassStateType {
  name: string
}

export default class App extends Component<{}, CLassStateType> {
  constructor(public props: string) {
    super(props)
    this.state = {
      name: '',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.koala} source={require('./assets/koala.png')} />
        <View style={styles.logoinput}>
          <Image style={styles.at} source={require('./assets/at.png')} />
          <TextInput
            style={styles.input}
            placeholder="email"
            onSubmitEditing={(event) =>
              alert(`Bonjour, ${event.nativeEvent.text} `)
            }
          ></TextInput>
        </View>
        <View style={styles.logoinput}>
          <Image style={styles.key} source={require('./assets/key.png')} />
          <TextInput
            style={styles.input}
            placeholder="mot de passe"
            onSubmitEditing={(event) =>
              alert(`Bonjour, ${event.nativeEvent.text} `)
            }
          ></TextInput>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Good job!')}
        >
          <Text>Se connecter</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    height: 70,
    width: 275,
    fontSize: 25,
    justifyContent: 'center',
  },
  logoinput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 35,
    paddingLeft: 25,
  },
  koala: {
    width: 108,
    height: 75,
  },
  at: { marginRight: 15 },
  key: { width: 50, height: 50, marginRight: 15 },
  button: {
    backgroundColor: 'skyblue',
    height: 60,
    width: 300,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
