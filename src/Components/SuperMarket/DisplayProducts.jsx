import React from 'react'
import Product from './Product'

const DisplayProducts = (props) => {
  
  // if(props.products.category === props.productCategory)
  return (
    <div className="product-list">
      {props.products.map((product, index) => (
        product.category === props.productCategory && <Product product={product} key={index}/>
      ))}
    </div>
  )
}

export default DisplayProducts