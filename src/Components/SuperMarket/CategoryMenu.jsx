import React from 'react'

const CategoryMenu = (props) => {

  const categories= [...new Set(props.products.map(
    (product) => product.category
))]
console.log('categories are: ', categories)
  return (
    <select onChange={(event) => props.setProductCategory(event.target.value)}>
      {categories.map((category, idx) => (
        <option key={idx} value={category}>
          {category}
        </option>
      ))}
    </select>
  )
}

export default CategoryMenu