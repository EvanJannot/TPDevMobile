import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
} from 'react-native'
import Header from './Header'
import Input from './Input'
import Footer from './Footer'
import Todo from './TodoList'

export default class HomeScreen extends Component<{}, {}> {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header />
          <Input />
          <Todo />
        </View>
        <Footer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
