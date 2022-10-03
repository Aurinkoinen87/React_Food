import React from 'react'
import SvgSelector from "./SvgSelector"

export default function CartPizza({id, title, thickness, diameter, imageUrl, price, count}) {
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
      <SvgSelector name={'minus'} />
        <span class="cart-pizza__num">{count}</span>
      <SvgSelector name={'plus'} classSelect={'icon-plus'} />
      </div>

      <div class="cart-pizza__price">{price + ' RUR'}</div>

      <div className="cart-pizza__count">{'x ' + count}</div>

      <SvgSelector name={'cancel-circle'} />

    </div>

  </div>
  )
}
