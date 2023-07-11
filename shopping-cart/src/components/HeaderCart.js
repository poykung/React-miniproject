import React from 'react'
import { MyCartContext } from '../management/Context'



function HeaderCart() {
  const {amount} = MyCartContext()
  return (
   <button className='button'>
    <span>Cart |</span>
    <span className='badge'>{amount}</span>
   </button>
  )
}

export default HeaderCart