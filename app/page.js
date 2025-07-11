import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Liste des tâches | Mon App",
  description: "Découvrez toutes les tâches récupérées depuis JSONPlaceholder.",
};

const getJsonPlaceholders = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!res.ok) {
      throw new Error("Échec de récupération des tâches");
    }

    const data = await res.json();
    return data.slice(0, 10);
  } catch (error) {
    console.error("Erreur de fetch dans getJsonPlaceholders:", error.message);
    return []; 
  }
};

const Home = async () => {
  const todos = await getJsonPlaceholders();

  return (
    <main>
      <h1>TODOS</h1>
      {todos.length === 0 ? (
        <p>Impossible de charger les tâches pour le moment.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Home;
