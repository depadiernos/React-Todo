import React, { Component } from "react"
import styled from "styled-components"

const Style = styled.form`
  input {
    height: 2rem;
    padding-left: 1rem;
  }
  button {
    background-color: white;
    border: 1px black solid;
    height: 2.4rem;
  }
`

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {id:'',completed: false, task:''}
  }

  onChange = (e) => {
    e.preventDefault()
    this.setState({
      id: Date.now(),
      completed: false,
      task: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onAddItem(e, this.state)
    this.setState({ task: "" })
  }

  render() {
    return (
      <Style onSubmit={(e) => this.onSubmit(e)}>
        <input name="task" type="text" onChange={(e) => this.onChange(e)} value={this.state.task}/>
        <button>Add Item</button>
      </Style>
    )
  }
}

export default TodoForm
