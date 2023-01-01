import React from 'react'

const Todo = ({ id, title, completed }) => {
  return (
    <div data-testid={`todo-${id}`}>
      {
        completed ? (<strike><h1>{ title }</h1></strike>) : (<h1>{ title }</h1>)
      }
    </div>
  )
}

export default Todo
