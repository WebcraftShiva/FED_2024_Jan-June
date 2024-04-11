import React,{useState} from 'react'
import "../products/Product.css"

const Product = (props) => {

     const  [price,setPrice]= useState(props.price)

  const cardClickHandler = () =>{
    setPrice(100)
  }

  return (
    <figure onClick={cardClickHandler} className='product'>
        <img src={props.imgUrl} alt={props.name}/>
        <h1>Name: {props.name}</h1>
        <h1>Price: Rs {price}</h1>
    </figure>
  )
}

export default Product