import React from 'react'
import "../products/Product.css"

const Product = (props) => {
  return (
    <figure className='product'>
        <img src={props.imgUrl} alt={props.name}/>
        <h1>Name: {props.name}</h1>
        <h1>Price: Rs {props.price}</h1>
    </figure>
  )
}

export default Product