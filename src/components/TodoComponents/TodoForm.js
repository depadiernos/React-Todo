import React, { Component } from "react"
import styled from "styled-components"

const Style = styled.div`
  input {
    height: 2rem;
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
    this.state = {}
  }

  onChange = (e) => {
    e.preventDefault()
    this.setState({
      id: Date.now(),
      completed: false,
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Style>
        <form>
          <input name="task" type="text" onChange={(e) => this.onChange(e)} />
          <button onClick={(e) => this.props.onAddItem(e, this.state)}>
            Add Item
          </button>
        </form>
      </Style>
    )
  }
}

export default TodoForm
