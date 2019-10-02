import React, {Component} from "react"

import TodoList from "components/TodoComponents/TodoList"
import TodoForm from "components/TodoComponents/TodoForm"

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  onComplete = (event, id) => {
    this.setState(
      // eslint-disable-next-line
      this.state.list.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed
        }
      })
    )
  }

  onAddItem = (e, newItem) => {
    e.preventDefault()
    this.setState({ list: [...this.state.list, newItem] })
  }

  render() {
    return (
      <div>
        <TodoForm onAddItem={this.onAddItem} />
        <TodoList list={this.state.list} onComplete={this.onComplete} />
      </div>
    )
  }
}

export default App
