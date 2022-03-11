import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
} from 'react-native'

export default class Footer extends Component<{}, {}> {
  render() {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Supprimer les tâches terminées</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  button: {
    height: 70,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
