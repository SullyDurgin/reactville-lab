import React from 'react'
import { useState } from 'react'
import '../../styles/burger.css'

import { ingredients } from '../../data/burger-data'
import IngredientList from '../BurgerShop/IngredientList'
import BurgerStack from '../BurgerShop/BurgerStack'

const BurgerShop = () => {
  console.log(ingredients)
  
  const [stack, setStack] = useState([])

  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button>Clear Order</button>
      </nav>
      <section>
        <IngredientList />
        <BurgerStack />
      </section>
    </div>
  )
}

export default BurgerShop