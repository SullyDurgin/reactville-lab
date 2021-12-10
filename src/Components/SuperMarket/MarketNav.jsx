import React from 'react'
import CategoryMenu from './CategoryMenu'

const MarketNav = (props) => {
  return (
    <nav>
      <h1>Super Market</h1>
      <CategoryMenu products={props.products} setProductCategory={props.setProductCategory} filter={props.filter}/>
      <button id="cart-button"></button>
    </nav>
  )
}

export default MarketNav