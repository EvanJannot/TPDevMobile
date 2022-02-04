import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.squareV}></View>
        <ScrollView horizontal>
          <View style={styles.squareH}></View>
          <View style={styles.squareH}></View>
          <View style={styles.squareH}></View>
        </ScrollView>
        <View style={styles.squareV}></View>
        <View style={styles.squareV}></View>
        <ScrollView horizontal>
          <View style={styles.squareH}></View>
          <View style={styles.squareH}></View>
          <View style={styles.squareH}></View>
        </ScrollView>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  squareV: {
    width: 350,
    height: 300,
    backgroundColor: 'steelblue',
    margin: 15,
    marginLeft: 0,
  },
  squareH: {
    width: 300,
    height: 300,
    backgroundColor: 'skyblue',
    margin: 15,
    marginLeft: 0,
  },
})
