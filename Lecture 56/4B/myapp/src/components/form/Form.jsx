import React,{useState} from 'react'
import '../form/Form.css'

const Form = (props) => {


    const [name,setName] =useState('')
    const [price,setPrice] =useState(0)
    const [img,setImg] =useState('')


    const nameChangehandler = (event) => {
        setName(event.target.value)
    }

    const priceChangehandler = (event) => {
        setPrice(event.target.value)
    }
    const imgUrlChangehandler = (event) => {
        setImg(event.target.value)
        
    }

    const formSubmitHandler = (event) =>{
        event.preventDefault()
        console.log(name)
        console.log(price)
        console.log(img)

        props.addProduct({name,price,imgUrl: img})

        setName('')
        setPrice(0)
        setImg("")

    }

  return (
    <form onSubmit={formSubmitHandler} className='form'>
        <div>
            <label htmlFor='name'>Product Name:
            </label>
            <input type='text' id='name' placeholder='Product Name' onChange={nameChangehandler} value={name}/>
        </div>
        <div>
            <label htmlFor='name'>Product Price:
            </label>
            <input type='number' id='name' placeholder='Product Price' onChange={priceChangehandler} value={price}/>
        </div>
        <div>
            <label htmlFor='img'>Product Img Url:
            </label>
            <input type='text' id='img' placeholder='Product Img Url' onChange={imgUrlChangehandler} value={img}/>
        </div>
        <button>Create Product</button>
    </form>
  )
}

export default Form
