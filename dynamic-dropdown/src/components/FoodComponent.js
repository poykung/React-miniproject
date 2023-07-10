import React from 'react'

function FoodComponent({foodName,image_url}) {
  return (
    <div className="single-food">
        <h2>{foodName}</h2>
        <img src={image_url} alt={foodName}/>
    </div>
  )
}

export default FoodComponent