import React from 'react'
import Product from './Product'

const DisplayProducts = (props) => {
  
  const selectedProducts = props.products.map((product, idx) => {
    return product.category === props.productCategory &&
    <Product 
      product={product} 
      key={idx} 
      addToCart={props.addToCart}
    />
  })
  return (
    <div className="product-list">
      {selectedProducts}
    </div>
  )
}

export default DisplayProducts