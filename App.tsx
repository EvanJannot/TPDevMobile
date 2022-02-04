import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.textFont}>Hello World ;)</Text> */}
      {/* <View style={styles.squareRed}></View>
      <View style={styles.squareOrange}></View>
      <View style={styles.squareGreen}></View> */}
      <Image
        style={styles.ensc}
        source={{ uri: 'https://www.bpesquet.fr/images/ENSC.jpg' }}
      />
      <Image
        style={styles.ensc}
        source={{ uri: 'https://www.bpesquet.fr/images/ENSC.jpg' }}
      />
      <Image
        style={styles.ensc}
        source={{ uri: 'https://www.bpesquet.fr/images/ENSC.jpg' }}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 100,
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  textFont: {
    fontSize: 40,
    color: 'red',
  },
  squareRed: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  squareOrange: {
    backgroundColor: 'orange',
    height: 100,
    width: 100,
  },
  squareGreen: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
  ensc: {
    width: 108,
    height: 75,
  },
})
