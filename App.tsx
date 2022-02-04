import { StatusBar } from 'expo-status-bar'
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Saisissez votre prénom"
        onSubmitEditing={(event) =>
          alert(`Bonjour, ${event.nativeEvent.text} `)
        }
      ></TextInput>
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
  input: {
    height: 80,
    fontSize: 25,
    justifyContent: 'center',
  },
  font: { alignSelf: 'center', fontSize: 20, fontWeight: 'bold' },
})
