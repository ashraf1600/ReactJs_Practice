import React from 'react'
import SingleCart from '../SingleCart/SingleCart';

    // cartId,
    // userId,
    // productId,
    // productName,
    // category,
    // quantity,
    // price,
    // dateAdded,
    // imageUrl

function Placement({cart}) {
  return (
    <div className='text-white'>
        <h1 className='text-3xl'> Add To Cart: {cart.length} </h1>
        {
          cart.map(singleCart => <SingleCart
          key = {singleCart.cartId}
          singleCart = {singleCart}
          ></SingleCart>)
        }
    </div>
  )
}

export default Placement 