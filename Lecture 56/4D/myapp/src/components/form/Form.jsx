import React, { useState } from 'react'
import '../form/Form.css'

const Form = (props) => {

    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    const [img,setImg] = useState('')


    const nameChangeHandler = (event)=> {
        setName(event.target.value)
    }

    const priceChangeHandler = (event)=> {
        setPrice(event.target.value)
    }
    const imgUrlChangeHandler = (event)=> {
        setImg(event.target.value)
    }

    const formSubmitHandler = (event) =>{
        event.preventDefault();
        // console.log(name)
        // console.log(price)
        // console.log(img)

        setName('')
        setPrice(0)
        setImg('')

        props.addProduct({name,price,imgUrl:img})
    }

  return (
    <form onSubmit={formSubmitHandler} className='form'>
        <div>
            <label htmlFor='name'>Name:
            </label>
            <input type='text' id='name' placeholder='Product Name' onChange={nameChangeHandler} value={name}/>
            <div>
            <label htmlFor='name'>Price:
            </label>
            <input type='number' id='name' placeholder='Product Price' onChange={priceChangeHandler} value={price}/>
        </div>
        <div>
            <label htmlFor='name'>Image Url:
            </label>
            <input type='text' id='img' placeholder='Product Img Url' onChange={imgUrlChangeHandler} value={img}/>
        </div>
        <button>Create Product</button>
        </div>
    </form>
  )
}

export default Form
