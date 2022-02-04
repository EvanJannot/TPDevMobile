import { StatusBar } from 'expo-status-bar'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const DATA = [
  { id: 0, firstName: 'Benoit' },
  { id: 1, firstName: 'Bernard' },
  { id: 2, firstName: 'Jean-Marc A' },
  { id: 3, firstName: 'Jérôme' },
  { id: 4, firstName: 'Hervé' },
  { id: 5, firstName: 'Jean-Marc S' },
  { id: 6, firstName: 'Pierre-Alexandre' },
  { id: 7, firstName: 'Edwige' },
  { id: 8, firstName: 'Baptiste' },
  { id: 9, firstName: 'Coralie' },
]

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.font}>{item.firstName}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingTop: 60,
  },
  item: {
    backgroundColor: 'skyblue',
    height: 80,
    marginVertical: 4,
    alignContent: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 32,
    flexDirection: 'row',
  },
})
