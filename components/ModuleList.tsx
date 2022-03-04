import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native'

import moduleService, { Module } from '../services/module.service'
import ModuleItem from './ModuleItem'

interface classState {
  pressed: boolean
  modules: Array<Module>
}

export default class ModuleList extends Component<{}, classState> {
  state: classState = { pressed: false, modules: [] }

  loadModules = () => {
    moduleService.getAll().then((modules) => {
      let displayedModules = modules
      this.setState({ modules: displayedModules })
    })
  }

  clearModules = () => {
    this.setState({ modules: [] })
  }

  //   componentDidMount() {
  //     this.loadModules()
  //   }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.loadModules()}
        >
          <Text style={styles.textButton}>Afficher les modules</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.clearModules()}
        >
          <Text style={styles.textButton}>Effacer les modules</Text>
        </TouchableOpacity>
        <FlatList<Module>
          data={this.state.modules}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: { item: Module }) => (
            <ModuleItem module={item} />
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listButton: { justifyContent: 'space-evenly' },
  textButton: {
    color: 'white',
    fontSize: 18,
  },
  button: {
    backgroundColor: 'skyblue',
    height: 60,
    width: 375,
    borderRadius: 35,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
})
