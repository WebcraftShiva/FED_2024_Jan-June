import React,{useState} from 'react'
import '../form/Form.css'

const Form = () => {

     const [name,setName]=useState('');
     const [price,setPrice]=useState('');
     const [imgUrl,setImg]=useState('');

     const nameChangeHandler = () => {
        console.log("Name chnage handler")

     }

    const formSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <form onSubmit={formSubmitHandler} className='form'>
        <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' onChange={nameChangeHandler}  placeholder='Product Name'/>   
        </div>
        <div>
            <label htmlFor='name'>Price:</label>
            <input type='number' id='price' placeholder='Product Price'/>   
        </div>
        <div>
            <label htmlFor='img'>Img Url:</label>
            <input type='text' id='img' placeholder='Image URL'/>   
        </div>
        <button>Add Product</button>
    </form>
  )
}

export default Form
