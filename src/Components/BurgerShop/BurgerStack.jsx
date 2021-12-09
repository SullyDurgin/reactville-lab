
   
import React from "react"
import Ingredient from './Ingredient'

const BurgerStack = (props) => {

  if(!props.ingredients.length) {
    return(
      <ul className="burger-stack">
        <div>No ingredients</div>
      </ul>
    )
  }


  return (
    <ul className="burger-stack">
      {props.ingredients.map((ingredient, idx) => (
				<Ingredient key={idx} idx={idx} ingredient={ingredient} removeFromBurger={props.removeFromBurger} />
			)).reverse()}
    </ul>
  )
}

export default BurgerStack