import React from "react"
import styled from "styled-components"

const Style = styled.div`
  display: flex;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  min-width: 230px;
  justify-content: center;
  ${(props) =>
    props.item.completed ? `
    background: lightgray;
    border: 1px lightgray solid;
    color: white;
    ` : `
    background:white;
    border: 1px black solid;
    color: black;
    `}
`

export default function Todo(props) {
  return (
    <Style item={props.item} onClick={props.onComplete}>
      {props.item.task}
    </Style>
  )
}
