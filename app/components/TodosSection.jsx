import React from 'react'
import Link from 'next/link';
const TodosSection = ({todos}) => {

    console.log(todos);
  return (
    <div>
        <h1>TODOS</h1>
        <ul>
            {todos && todos?.map((todo, index) => {
                return(
                    <li key={index}>
                        <Link href={`/todos/${todo.id}`}>
                            {todo.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default TodosSection