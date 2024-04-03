import React from 'react'
import "./Person.css"

const Person = (props) => {
  return (
    <article className='person'>
        <h2>Name: {props.name}</h2>
        <h3>Age: {props.age}</h3>
        <p>Crush: {props.crush}</p>
    </article>
  )
}

export default Person