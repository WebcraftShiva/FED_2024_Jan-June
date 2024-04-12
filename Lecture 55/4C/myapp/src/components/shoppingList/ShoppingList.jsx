import React from 'react'
import Product from '../Products/Product'
import Form from '../form/Form'

const ShoppingList = () => {

    const products = [
        {
            name: 'Iphone 15',
            price: 86000,
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBXPLJdiG5UiZx7Ivk_UX1hYn-k68E-URYMFyptxwJQ&s"
        },
        {
            name: 'Ipad',
            price: 86000,
            imgUrl: "https://static.toiimg.com/thumb/msid-104932985,width-400,resizemode-4/104932985.jpg"
        },
        {
            name: 'Iphone 14',
            price: 64000,
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLG1FLhOkPyzo_BOtUVAn0EilFfyFAJjeLRLI5Ba7bg&s"
        },
        {
            name: 'Macbook',
            price: 120000,
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwwbQYDlN5ba0OWJX_-Zaa0JgjcNZS0eHrP7kzgjRWQ&s"
        },
    ]

  return (
    <section>

        <Form/>
        {products.map((products,idx)=>{
            return <Product key={idx}
            name = {products.name}
            price = {products.price}
            imgUrl = {products.imgUrl}
            />
        })}
    </section>
  )
}

export default ShoppingList