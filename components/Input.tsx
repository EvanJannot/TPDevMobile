import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
} from 'react-native'

import service from '../services/todo.service'

interface classState {
  search: string
}

export default class Input extends Component<{}, classState> {
  state: classState = { search: '' }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Saisissez une nouvelle tâche"
          onChange={(event) => {
            this.setState({ search: event.nativeEvent.text })
          }}
          onSubmitEditing={(event) => {
            service.add(this.state.search)
          }}
        ></TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#f5f5f5',
  },
  input: {
    paddingLeft: 10,
    fontSize: 18,
  },
})
