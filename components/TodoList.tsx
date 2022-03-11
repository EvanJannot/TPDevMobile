import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
} from 'react-native'
import service, { Todo } from '../services/todo.service'

interface classState {
  todo: Array<Todo>
}

export default class HomeScreen extends Component<{}, classState> {
  state: classState = { todo: [] }
  render() {
    return <View></View>
  }
}
