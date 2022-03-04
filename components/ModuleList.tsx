import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
  Touchable,
} from 'react-native'

interface classState {
  pressed: boolean
}

export default class AuthForm extends Component<{}, classState> {
  state: classState = { pressed: false }
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ pressed: true })}
        >
          <Text style={styles.textButton}>Afficher les modules</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ pressed: false })}
        >
          <Text style={styles.textButton}>Effacer les modules</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert(this.state.pressed)}
        >
          <Text>Affiche state</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listButton: { justifyContent: 'space-evenly' },
  textButton: {
    color: 'white',
    fontSize: 18,
  },
  button: {
    backgroundColor: 'skyblue',
    height: 60,
    width: 375,
    borderRadius: 35,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
})
