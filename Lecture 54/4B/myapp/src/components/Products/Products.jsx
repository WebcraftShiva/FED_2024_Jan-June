import React,{useState} from 'react'
import '../Products/Products.css'

const Products = (props) => {

    const [price,setPrice]   = useState(props.price)
  // let price = props.price;
  // console.log(price)

  const CardClickHandler = () =>{
    // console.log("Clicked")
    // price = 100;
    // console.log(price)
    setPrice(100)

  }

  return (
    <figure onClick={CardClickHandler} className='product'>
        <img src={props.imgUrl} alt={props.name}/>
        <h1>Name: {props.name}</h1>
        <h2>Price: Rs {price}</h2>
    </figure>
  )
}

export default Products