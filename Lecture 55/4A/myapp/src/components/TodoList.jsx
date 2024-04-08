import React from 'react'

const todoList = () => {

  const todos = [
    {
      todoText: "Go to Gym",
      isCompleted: true
    },
    {
      todoText: "Go to University",
      isCompleted: false
    },
    {
      todoText: "Go to Groceries",
      isCompleted: true
    },
    {
      todoText: "Revise React",
      isCompleted: false
    },
  ]

  return (
    <ul>
        {todos.map((todos)=>{
          return <li>
            {todos.todoText}
            <input type='checkbox' defaultChecked={todos.isCompleted}/>
          </li>
        })}
    </ul>
  )
}

export default todoList