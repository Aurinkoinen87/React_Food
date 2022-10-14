import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToOrder } from '../redux/slices/cartSlice'
import { showAdded } from '../redux/slices/msgSlice'
import { PlusMinus } from './PlusMinus'
import { Link } from "react-router-dom"




export function Pizza({ id, imageUrl, title, types, sizes, price, category, rating }) {

let [count, setCount] = useState(0)
const dispatch = useDispatch()

let thickness = ['thin', 'common']

let [thick, setThick] = useState(types[0])
let [diameter, setDiameter] = useState(sizes[0])

const addToCart = () => {
  if(!count){
    setCount(++count)
    return 
  }
  
  const pizza = { title, thickness: thickness[thick], diameter, imageUrl, price, count }
  dispatch(addToOrder(pizza))
  setCount(0)
  dispatch(showAdded(true))
}
const plusItem = () => setCount(++count)
const minusItem = () => {
  if(!count){
    return 
  }
  setCount(--count)
}

const { order } = useSelector((state)=> state.cart)
console.log(order)

return (
    <div class="pizza">
      <div className="pizza-img-desc">
    <Link to={`item/${id}`} >
      <div className="pizza__pic">
        <div className="pizza__hidden">
          Read info...
        </div>
      <img class="pizza-img" src={imageUrl} alt="menu__pizza"/>
      </div>
    </Link>
    <h3 class="pizza__title">{title}</h3>
    </div>
    <div className="pizza-options">
    <div class="pizza__customize">
      <ul class="pizza__thickness-list">
        {types.map(t=> <li className={`pizza__thickness-item ${thick == t && "pizza__thickness-item--active"}`}
        onClick={()=> setThick(t)} key={id}>{thickness[t]}</li>)}
        
      </ul>
      <ul class="pizza__diameter-list">
        {sizes.map(d=> <li className={`pizza__diameter-item ${diameter == d && "pizza__diameter-item--active"}`}
        onClick={()=> setDiameter(d)} key={id}>{d} cm</li>)}
      </ul>
    </div>
    <div className="pizza__count">
      <PlusMinus minusItem={minusItem} plusItem={plusItem} />
      </div>
    
    <div class="pizza__purchase">
      <span class="pizza__price">{price}</span>

        <button class="pizza__add" onClick={addToCart}>
      <span className={`pizza__add-text`} style={{color: count? 'orange' : ''}}>{count? `Add to cart` : `Add`}</span>
      {count? <span class="pizza__add-count">{count}</span> : ''}
      </button>

    </div>
    </div>
  </div>
  )
} 