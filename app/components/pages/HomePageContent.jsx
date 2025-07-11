"use client"
import React from 'react'
import TodosSection from '../TodosSection';
const HomePageContent = ({todos}) => {
  return (
    <TodosSection todos={todos} />
  )
}

export default HomePageContent