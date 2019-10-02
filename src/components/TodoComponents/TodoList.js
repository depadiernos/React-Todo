// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react"

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <>{this.props.list.map((item)=>{
      return <div key={item.id}>{item.task}</div>
    })}</>
  }
}

export default TodoForm
