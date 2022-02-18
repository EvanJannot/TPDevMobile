import InputContainer from './Input'
import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native'

export default class AuthForm extends Component<{}, {}> {
  displayAlert = (text: string) => {
    Alert.alert('Action Sélectionnée', text)
  }
  render() {
    return (
      <View style={styles.form}>
        <InputContainer
          textForm="email"
          imagePath={require('../assets/at.png')}
        />
        <InputContainer
          textForm="mot de passe"
          imagePath={require('../assets/key.png')}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.displayAlert(`Connexion avec le mail : `)}
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
