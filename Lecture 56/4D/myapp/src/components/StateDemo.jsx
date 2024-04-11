import React,{useState} from 'react'

const StateDemo = () => {
    
     const  [count,setCount] =useState(0)

    let cardClickHandler = () =>{
        setCount(count+1) 

    }

  return (
    <div>
    <h1>Count Is: {count}</h1>
    <button onClick={cardClickHandler}>Increase Count</button>
    </div>
  )
}

export default StateDemo
