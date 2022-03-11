import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
} from 'react-native'

export default class Header extends Component<{}, {}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TodoNative</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: { color: 'white', fontSize: 24, marginBottom: 20 },
  container: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 90,
    backgroundColor: '#4682b4',
  },
})
