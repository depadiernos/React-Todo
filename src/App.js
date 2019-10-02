import React, { Component } from "react"
import styled from "styled-components"
import TodoList from "components/TodoComponents/TodoList"
import TodoForm from "components/TodoComponents/TodoForm"

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`

const Complete = styled.button`
    background-color: white;
    border: 1px black solid;
    height: 2.4rem;
    margin: 1rem;
  
`

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
    if(newItem.task) {this.setState({ list: [...this.state.list, newItem] })}
  }

  render() {
    return (
      <Style>
        <h1>Todo List</h1>
        <TodoList list={this.state.list} onComplete={this.onComplete} />
        <TodoForm onAddItem={this.onAddItem} />
        <Complete>Clear Completed</Complete>
      </Style>
    )
  }
}

export default App
