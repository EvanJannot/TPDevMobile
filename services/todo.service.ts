import AsyncStorage from '@react-native-async-storage/async-storage'

export interface Todo {
  task: string
  completed: boolean
}

class TodoService {
  private todos: Array<Todo> = []

  add(task: string) {
    // Add new todo at beginning of array
    const todo = { task, completed: false }
    AsyncStorage.setItem(task, JSON.stringify(todo))
    this.todos = [todo, ...this.todos]
  }

  // Return all todos asynchronously. Returns a Promise
  async getAll(): Promise<Array<Todo>> {
    const keys = await AsyncStorage.getAllKeys()
    const jsonTodos = await AsyncStorage.multiGet(keys)
    return jsonTodos.map((item) => JSON.parse(item[1]))
    // return new Promise((resolve) => {
    //   resolve(this.todos)
    // })
  }

  remove(task: string) {
    // Keep only todos that don't have task as key
    this.todos = this.todos.filter((todo: Todo) => todo.task !== task)
  }

  toggle(task: string) {
    // Toggle completion for the todo identified by its task
    this.todos = this.todos.map((todo) => {
      if (todo.task === task) {
        return { task, completed: !todo.completed }
      }
      return todo
    })
  }

  removeCompleted() {
    // Keep only non-completed todos
    this.todos = this.todos.filter((todo) => !todo.completed)
  }
}

export default new TodoService()
