import React from 'react'
import Products from '../Products/Products'

const ShoppingList = () => {

    const products = [
        {
            name: "Iphone 15",
            price: 86000,
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46tWXYeVP5ZkGuCvfOdLawPYQqBOay1n4ww&s"
        },
        {
            name: "Ipad",
            price: 64000,
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3_Vxj59ARVgVhL6G9wMjjTvCbvtClAFfTfA&s"
        },
        {
            name: "MacBook",
            price: 126000,
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kgp4HvpbXP4l7VthD165Y3qo3e0OizAm1w&s"
        },
        {
            name: "EarBuds",
            price: 12000,
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4NGxHDeXFrrlqj1WdBGsZeUwHInth3ZmVw&s"
        },

    ]

  return (
    <section>

        {products.map((product,idk)=>{
            return <Products key={idk}
            name = {product.name}
            price = {product.price}
            imgUrl = {product.imgUrl}
            />
        })}
    </section>
  )
}

export default ShoppingList