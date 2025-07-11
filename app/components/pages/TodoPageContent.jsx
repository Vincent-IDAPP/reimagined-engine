import React from 'react'

const TodoPageContent = ({todo}) => {
  return (
    <div>
        <h1>{todo.title}</h1>
        <p>completed: {todo.completed}</p>
        <p>userId: {todo.userId}</p>
    </div>
  )
}

export default TodoPageContent