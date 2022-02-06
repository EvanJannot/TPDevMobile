import { StatusBar } from 'expo-status-bar'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import PersonList, { Person } from './PersonList'

const DATA = [
  { id: 0, firstName: 'Benoit', lastName: 'Leblanc' },
  { id: 1, firstName: 'Bernard', lastName: 'Claverie' },
  { id: 2, firstName: 'Jean-Marc', lastName: 'Andre' },
  { id: 3, firstName: 'Jérôme', lastName: 'Saracco' },
  { id: 4, firstName: 'Hervé', lastName: 'Le Guyader' },
  { id: 5, firstName: 'Jean-Marc', lastName: 'Salotti' },
  { id: 6, firstName: 'Pierre-Alexandre', lastName: 'Favier' },
  { id: 7, firstName: 'Edwige', lastName: 'Clermont' },
  { id: 8, firstName: 'Baptiste', lastName: 'Pesquet' },
  { id: 9, firstName: 'Coralie', lastName: 'Eyraud-Dubois' },
  { id: 10, firstName: 'Christophe', lastName: 'Jauze' },
  { id: 11, firstName: 'Véronique', lastName: 'Lespinet-Najib' },
  { id: 12, firstName: 'Elisabeth', lastName: 'Kijewski' },
  { id: 13, firstName: 'Liliana', lastName: 'Audin-Garcia' },
]

export default function App() {
  return (
    <View style={styles.container}>
      <PersonList DATA={DATA} />
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
