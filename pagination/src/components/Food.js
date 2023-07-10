import React from 'react'

function Food({name,image_url}) {
  return (
   <div className="card">
        
        <div className="card-body">
            <div className="card-image">
            <img src={image_url} alt={name}/>
            </div>
        </div>
        <div className="title">{name}</div>
   </div>
  )
}

export default Food