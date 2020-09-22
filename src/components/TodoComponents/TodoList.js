// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react"
import Todo from "components/TodoComponents/Todo"

class TodoForm extends Component {
  render() {
    return (
      <>
        {this.props.list.map((item) => {
          return (
            <Todo
              key={item.id}
              item={item}
              onComplete={(e) => this.props.onComplete(e, item.id)}
            />
          )
        })}
      </>
    )
  }
}

export default TodoForm
