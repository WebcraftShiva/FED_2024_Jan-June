import React,{useState} from 'react'
import "../Products/Product.css"

const Product = (props) => {

  // let price = props.price
      let [price,setPrice] =useState(props.price)

   let cardClickHandler = () =>{
    // price = 100
    // console.log(price)
    setPrice(100)
    }

  return (
    <figure onClick={cardClickHandler} className='product'>
        <img src= {props.imgUrl} alt= {props.name}/>
        <h2>Name: {props.name}</h2>
        <h2>Price: Rs {price}</h2>
    </figure>
  )
}

export default Product