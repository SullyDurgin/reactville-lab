import React, { useState } from 'react'
import '../../styles/burger.css'

import { ingredients } from '../../data/burger-data'
import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'

const BurgerShop = () => {

  const [stack, setStack] = useState([])

  const addToBurger = (burgerAdd) => {
    console.log('burger choice', burgerAdd)
    setStack([...stack, burgerAdd])
  }

  const removeFromBurger = (index) => {
    setStack(stack.filter((idx) => idx !== index))
  }

  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={() => setStack([])}>Clear Order</button>
      </nav>
      <section>
        <IngredientList addToBurger={addToBurger} stack={stack} ingredients={ingredients}/>
        <BurgerStack removeFromBurger={removeFromBurger} ingredients={stack}/>
      </section>
    </div>
  )
}

export default BurgerShop