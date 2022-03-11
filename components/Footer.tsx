import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
} from 'react-native'

interface classProps {
  onRemoveCompleted: () => void
}

export default class Footer extends Component<classProps, {}> {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.onRemoveCompleted}
      >
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
