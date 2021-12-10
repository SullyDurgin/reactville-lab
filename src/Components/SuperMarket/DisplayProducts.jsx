
   
import React from 'react'
import Product from './Product'

const DisplayProducts = (props) => {
  
  return (
    <div className="product-list">
      {props.products.map((product, index) => (
        <Product product={product} key={index}/>
      ))}
    </div>
  )
}

export default DisplayProducts