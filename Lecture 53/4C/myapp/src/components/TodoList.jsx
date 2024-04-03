import React from 'react'

const TodoList = () => {

    const todos = [
        {
            todoText: "Go to Gym",
            isCompeleted: true

        },
        {
            todoText: "Go to University",
            isCompeleted: false

        },
        {
            todoText: "Buy groceries",
            isCompeleted: true

        },
        {
            todoText: "Revise React",
            isCompeleted: false

        },

    ]

  return (
    <ul>
        {todos.map((todos)=>{
            return <li>
                {todos.todoText}
                <input type='checkbox' defaultChecked={todos.isCompeleted}/>
            </li>
        })}
    </ul>
  )
}

export default TodoList