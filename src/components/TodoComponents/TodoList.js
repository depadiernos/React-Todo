// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react"
import Todo from 'components/TodoComponents/Todo'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <>{this.props.list.map((item)=>{
      return <Todo key={item.id} item={item.task} onComplete={this.props.onComplete}/>
    })}</>
  }
}

export default TodoForm
