import React from 'react'
import SvgSelector from "./SvgSelector"
import { deleteFromCart, minusItem, plusItem } from '../redux/slices/cartSlice.js'
import { useDispatch } from 'react-redux'




export default function CartPizza({ orderId, title, thickness, diameter, imageUrl, price, count }) {

  const dispatch = useDispatch()

  return (
    <div class="cart-pizza">

    <div class="cart-pizza__line"></div>

    <div class="cart-pizza__item">

      <div class="cart-pizza__name">
        <img class="cart-pizza__img" src={imageUrl} alt="pizza"/>
        <h4 class="cart-pizza__title">{title}</h4>
      </div>

      <div class="cart-pizza__text">{thickness +' ,' + diameter + ' cm'}</div>

      <div class="cart-pizza__val">
        <span onClick={()=> dispatch(minusItem(orderId))}>
      <SvgSelector name={'minus'} />
        </span>
        <span class="cart-pizza__num">{count}</span>
        <span onClick={()=> dispatch(plusItem(orderId))}>
      <SvgSelector name={'plus'} classSelect={'icon-plus'} />
        </span>
      </div>

      <div class="cart-pizza__price">{price + ' RUR'}</div>

      <div className="cart-pizza__count">{'x ' + count}</div>
      <span onClick={()=> dispatch(deleteFromCart(orderId))}>
        <SvgSelector name={'cancel-circle'} />
        </span>
      

    </div>

  </div>
  )
}
