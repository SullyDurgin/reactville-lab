import React from "react"
import Ingredient from "./Ingredient"

const IngredientList = (props) => {

	return (
		<ul>
			{props.ingredients.map((ingredient, index, isList) => (
				<Ingredient addToBurger={props.addToBurger} key={index} ingredient={ingredient} isList = {isList} />
			))}
		</ul>
	)
}

export default IngredientList