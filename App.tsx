import { StatusBar } from 'expo-status-bar'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Good job!')}
      >
        <Text style={styles.font}>Hit me like you mean it</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'skyblue',
    height: 75,
    width: 300,
    borderRadius: 10,
    justifyContent: 'center',
  },
  font: { alignSelf: 'center', fontSize: 20, fontWeight: 'bold' },
})
