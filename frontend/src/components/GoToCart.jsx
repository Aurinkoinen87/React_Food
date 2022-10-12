import React from 'react'
import SvgSelector from './SvgSelector'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function GoToCart() {

  const { totalSum, totalQuantity } = useSelector((state)=> state.cart)


  return (
    <Link class="cart" to={'cart'}>
    <div class="cart__inner">
      <span class="cart__price">{totalSum + ' RUR'}</span>

      <div class="cart__cart-box">
      <SvgSelector name={'cart'} classSelect={'icon-cart'} />
      </div>
      <span class="cart__quantity" style={{color: totalQuantity ? 'blue' : ''}}>{totalQuantity}</span>
    </div>
  </Link>
  )
}
