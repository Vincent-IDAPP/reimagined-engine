import React from "react";

const getTodoData = async (id) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

    if (!res.ok) {
      throw new Error(`Erreur lors du chargement de la tâche #${id}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Erreur dans getTodoData:", error.message);
    return null;
  }
};

export async function generateMetadata({ params }) {
  const { id } = params;

  const todo = await getTodoData(id);

  if (!todo) {
    return {
      title: "Tâche introuvable",
      description: `La tâche #${id} est introuvable.`,
    };
  }

  return {
    title: `Tâche #${todo.id} - ${todo.title}`,
    description: `Détail de la tâche ${todo.id} : ${todo.title}. Statut : ${
      todo.completed ? "Terminée" : "En cours"
    }.`,
  };
}

const Todo = async ({ params }) => {
  const { id } = params;
  const todo = await getTodoData(id);

  if (!todo) {
    return <div>Erreur lors du chargement de la tâche.</div>;
  }

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>completed: {todo.completed}</p>
      <p>userId: {todo.userId}</p>
    </div>
  );
};

export default Todo;
