import InputContainer from './Input'
import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native'

interface classState {
  login: Array<string>
}

export default class AuthForm extends Component<{}, classState> {
  state: classState = { login: [] }
  displayAlert = (text: string) => {
    Alert.alert('Action Sélectionnée', text)
  }
  sendForm = (info: string) => {
    this.displayAlert('Connexion avec le mail: ' + info)
  }
  changeLogin = (value: string) => {
    let newLogin = [...this.state.login, value]
    if (this.state.login.length > 2) {
      this.state.login.splice(0, 2)
      newLogin = [...this.state.login, value]
      this.setState({ login: newLogin })
    } else {
      this.setState({ login: newLogin })
    }
  }

  render() {
    return (
      <View style={styles.form}>
        <InputContainer
          security={false}
          textForm="email"
          imagePath={require('../assets/at.png')}
          modify={this.changeLogin}
        />
        <InputContainer
          security={true}
          textForm="mot de passe"
          imagePath={require('../assets/key.png')}
          modify={this.changeLogin}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.sendForm(this.state.login[0] + '\n' + this.state.login[1])
          }
        >
          <Text style={styles.textButton}>Se connecter</Text>
        </TouchableOpacity>
        <View style={styles.alertContainer}>
          <Text
            style={styles.alert}
            onPress={() => this.displayAlert('Mise à jour du mot de passe')}
          >
            Mot de passe oublié ?
          </Text>
          <Text
            style={styles.alert}
            onPress={() => this.displayAlert('Inscription')}
          >
            S'inscrire
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: 'skyblue',
    height: 60,
    width: 300,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  alertContainer: {
    alignItems: 'center',
    margin: 20,
  },
  alert: {
    padding: 10,
    fontSize: 18,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
  },
})
