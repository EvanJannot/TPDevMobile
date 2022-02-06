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

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.textFont}>
        {item.firstName} {item.lastName.toUpperCase()}{' '}
      </Text>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.DATA}
          renderItem={this.renderItem}
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
  },

  item: {
    backgroundColor: 'skyblue',
    marginTop: 5,
    height: 80,
    justifyContent: 'center',
  },

  textFont: {
    fontSize: 18,
  },
})

export default PersonList
