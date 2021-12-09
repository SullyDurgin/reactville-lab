
   
import React from "react"
import Ingredient from "./Ingredient"

const IngredientList = (props) => {

	return (
		<ul>
			{props.ingredients.map((ingredient, index) => (
				<Ingredient addToBurger={props.addToBurger} key={index} ingredient={ingredient}/>
			))}
		</ul>
	)
}

export default IngredientList