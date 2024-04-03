import React from 'react'

const TodoList = () => {

    const todos = [
        {
            todoText:"Go to gym",
            isCompleted: true
        },
        {
            todoText:"Go to university",
            isCompleted: false

        },
        {
            todoText:"Buy Gloceries",
            isCompleted: true
        },
        {
            todoText:"Revise React",
            isCompleted: false
        },
    ]

  return (
    <div>
        <ul>
            {todos.map((todos)=>{
                    return <li>
                        {todos.todoText}
                        <input type='checkbox' defaultChecked= {todos.isCompleted}/>
                    </li>
            }
            )}
        </ul>
    </div>
  )
}

export default TodoList