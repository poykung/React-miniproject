import React from 'react'

import CartItem from './CartItem'
import { MyCartContext } from '../management/Context'

function Cart() {
  const {cart,total,formatNumber} = MyCartContext()
 
  if(cart.length === 0){
    return (
      <div className='shopping-cart'>
         <div className='empty'>none products in the cart</div>
      </div>
    )
  }else{
    return (
      <div className='shopping-cart'>
          <div className='title'>Products</div>
              {cart.map((data)=>{
                  return <CartItem key={data.id} {...data}/>
              })}
          <div className='footer'>Total {formatNumber(total)} Baht</div>
      </div>
    )
  }
}

export default Cart