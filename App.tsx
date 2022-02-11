import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

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
        <TextInput
          style={styles.input}
          placeholder="Saisissez votre prénom"
          onSubmitEditing={(Event) =>
            this.setState({ name: Event.nativeEvent.text })
          }
        />
        <Text style={styles.nameOutput}>
          {this.state.name && `Bienvenue ${this.state.name}`}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 80,
    fontSize: 25,
    justifyContent: 'center',
    textAlign: 'center',
  },
  nameOutput: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2980b9',
  },
})
