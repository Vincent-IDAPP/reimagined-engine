import React from 'react'
import HomePageContent from './components/pages/HomePageContent'

export const metadata = {
  title: 'Liste des tâches | Mon App',
  description: 'Découvrez toutes les tâches récupérées depuis JSONPlaceholder.',
};

const getJsonPlaceholders =  async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data = await res.json()
  return data.slice(0,10);
}

const Home = async() => {
  const todos = await getJsonPlaceholders()
  return (
    <HomePageContent todos={todos} />
  )
}

export default Home