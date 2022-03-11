import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
} from 'react-native'

interface classState {
  search: string
}

interface classProps {
  onSubmitEditing: (task: string) => void
}

export default class Input extends Component<classProps, classState> {
  state: classState = { search: '' }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Saisissez une nouvelle tâche"
          onSubmitEditing={(event) => {
            this.props.onSubmitEditing(event.nativeEvent.text)
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
