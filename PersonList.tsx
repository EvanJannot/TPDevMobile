import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

export interface Person {
  id: number
  firstName: string
  lastName: string
}

class PersonList extends React.Component {
  constructor(public props: { DATA: Array<Person> }) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.DATA}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.textFont}>
                {item.firstName} {item.lastName.toUpperCase()}{' '}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    width: '100%',
  },

  item: {
    backgroundColor: 'skyblue',
    marginTop: 5,
    height: 40,
    justifyContent: 'center',
  },

  textFont: {
    fontSize: 18,
  },
})

export default PersonList
