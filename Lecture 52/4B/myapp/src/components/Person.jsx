import React from 'react'
import "./Person.css"

const Person = (props) => {
  return (
    <article className='person'>
        <h3>Name: {props.name}</h3>
        <h4>Age: {props.age}</h4>
        <p>Crush: {props.crush}</p>
    </article>
  )
}

export default Person