import TodoPageContent from '@/app/components/pages/TodoPageContent';
import React from 'react'


export async function generateMetadata({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
    const todo = await res.json();
  
    return {
      title: `Tâche #${todo.id} - ${todo.title}`,
      description: `Détail de la tâche ${todo.id} : ${todo.title}. Statut : ${todo.completed ? 'Terminée' : 'En cours'}.`,
    };
  }
  
const getTodoData = async(id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const data = await res.json();
    return data;
}
const Todo = async({params}) => {
    const param = await params;
    const todo = await getTodoData(param.id)
  return (
    <TodoPageContent todo={todo} />
  )
}

export default Todo