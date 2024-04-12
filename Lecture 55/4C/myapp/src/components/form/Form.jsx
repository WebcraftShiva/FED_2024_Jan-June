import React, { useState } from 'react'
import '../form/Form.css'

const Form = () => {

    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    const [img,setImg] = useState('')

    const nameChangeHandler = (event) => {
        console.log("Name chnaged")
        
    }

    const formSubmitHandler = (event) =>{
        event.preventDefault()
        
    }


  return (
    <form onSubmit={formSubmitHandler} className='form'>
        <div>
            <label htmlFor='name'>Name:
            </label>
            <input type='text' id='name' placeholder='Product Name' onChange={nameChangeHandler}/>
        </div>
        <div>
            <label htmlFor='name'>Price:
            </label>
            <input type='number' id='name' placeholder='Product Price'/>
        </div>
        <div>
            <label htmlFor='name'>Image Url:
            </label>
            <input type='text' id='img' placeholder='Product Img'/>
        </div>
        <button>Create Product</button>
    </form>
  )
}

export default Form
