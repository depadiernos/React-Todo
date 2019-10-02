import React from "react"
import styled from "styled-components"

const Style = styled.div`
  display: flex;
  padding: 10px;
  margin: 10px;
  border: 1px black solid;
  border-radius: 5px;
  min-width: 230px;
  justify-content: center;
  button {
    background-color: white;
    border: 1px black solid;
    border-radius: 3px;
  }
`

export default function Todo(props) {
  return (
    <Style onClick={(e)=>props.onComplete(props.key)}>
      {props.item}
    </Style>
  )
}
