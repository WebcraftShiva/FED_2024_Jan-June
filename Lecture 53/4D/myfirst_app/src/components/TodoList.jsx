import React from 'react'

const TodoList = () => {

    const todos = [
        {
            todoText: "Go to gym",
            isCompelted: true
        },
        {
            todoText: "Go to University",
            isCompelted: false
        },
        {
            todoText: "Buy Gloceries",
            isCompelted: true
        },
        {
            todoText: "Revise React",
            isCompelted: true
        },
    ] 

  return (
    <ul>
        {todos.map((todos)=>{
            return <li>
                {todos.todoText}
                <input type='checkbox' defaultChecked= {todos.isCompelted}/>
            </li>
        })}
    </ul>
  )
}

export default TodoList