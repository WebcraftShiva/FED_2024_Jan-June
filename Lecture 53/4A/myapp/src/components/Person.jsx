import React from 'react'
import "./Person.css"

const Person = (props) => {
  return (
    <article className='person'>
        <h3>Name: {props.name}</h3>
        {props.children}
    </article>
  )
}

export default Person
