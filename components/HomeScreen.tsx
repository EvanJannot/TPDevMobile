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

export default class HomeScreen extends Component<{}, {}> {
  render() {
    return (
      <View>
        <Header />
        <Input />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 60,
    backgroundColor: 'grey',
  },
})
