
import React, { useState } from 'react'
import '../../styles/super-market.css'

// Components & Data
import { products } from '../../data/market-data'
import MarketNav from './MarketNav'
import DisplayProducts from './DisplayProducts'
import Cart from './Cart'

const SuperMarket = () => {
  console.log(products)

  const [cart, setCart] = useState([])
  const [productCategory, setProductCategory] =('Produce')

  return (
    <div className="super-market">
      <section>
        <MarketNav products={products}/>
        <DisplayProducts products={products}/>
      </section>

      <Cart/>

    </div>
  )
}

export default SuperMarket