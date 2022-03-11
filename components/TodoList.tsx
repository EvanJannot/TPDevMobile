import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
} from 'react-native'
import TodoItem from './TodoItem'
import service, { Todo } from '../services/todo.service'

interface classProps {
  todo: Array<Todo>
  onDelete: (task: string) => void
  onToggle: (task: string) => void
}

export default class TodoList extends Component<classProps, {}> {
  constructor(public props: classProps) {
    super(props)
  }
  render() {
    return (
      <FlatList<Todo>
        style={styles.container}
        data={this.props.todo}
        keyExtractor={(todo) => todo.task}
        renderItem={({ item }: { item: Todo }) => (
          <TodoItem
            todo={item}
            onDelete={this.props.onDelete}
            onToggle={this.props.onToggle}
          />
        )}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
})
