import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
} from 'react-native'
import Header from './Header'
import Input from './Input'
import Footer from './Footer'
import TodoList from './TodoList'
import todoServices, { Todo } from '../services/todo.service'

interface classState {
  todo: Array<Todo>
}

export default class HomeScreen extends Component<{}, classState> {
  state: classState = { todo: [] }

  async loadTodos() {
    const todo = await todoServices.getAll()
    this.setState({ todo: todo })
  }

  addTodo = (task: string) => {
    todoServices.add(task)
    this.loadTodos()
  }

  removeTodo = (task: string) => {
    todoServices.remove(task)
    this.loadTodos()
  }

  toggleTodo = (task: string) => {
    todoServices.toggle(task)
    this.loadTodos()
  }

  removeCompleted = () => {
    todoServices.removeCompleted()
    this.loadTodos()
  }

  componentDidMount() {
    this.loadTodos()
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Input onSubmitEditing={this.addTodo} />
        <TodoList
          todo={this.state.todo}
          onDelete={this.removeTodo}
          onToggle={this.toggleTodo}
        />
        <Footer onRemoveCompleted={this.removeCompleted} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
})
