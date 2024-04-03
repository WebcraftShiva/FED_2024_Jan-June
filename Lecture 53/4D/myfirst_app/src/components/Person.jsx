import React from 'react'
import "./Person.css"

const Person = (props) => {
  return (
    <article className='person'>
        <h2>Name: {props.name}</h2>
        {props.children}
    </article>
  )
}

export default Person