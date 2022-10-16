import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToOrder } from '../redux/slices/cartSlice'
import { showAdded } from '../redux/slices/msgSlice'
import { PlusMinus } from './PlusMinus'



export default function ItemChoice({ id, imageUrl, title, types, sizes, price, category, rating }) {


  let [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const { addedMsg } = useSelector((state)=> state.messages)

  let thickness = ['thin', 'common']
  
  let [thick, setThick] = useState(types[0])
  let [diameter, setDiameter] = useState(sizes[0])
  
  const addToCart = () => {
    if(!count){
      setCount(++count)
      return 
    }
    
    const pizza = { id, title, thickness: thickness[thick], diameter, imageUrl, category, price, count }
    dispatch(addToOrder(pizza))
    setCount(0)
    if(!addedMsg){
    dispatch(showAdded(true))
    setTimeout(()=> dispatch(showAdded(false)), 3000)
    }
  }
  const plusItem = () => setCount(++count)
  const minusItem = () => {
    if(!count){
      return 
    }
    setCount(--count)
  }
  


  return (
    <>
    <div class="customize">
      <ul class="customize__thickness-list">
        {types.map(t=> <li className={`customize__thickness-item ${thick == t && "customize__thickness-item--active"}`}
        onClick={()=> setThick(t)} key={id}>{thickness[t]}</li>)}
        
      </ul>
      <ul class="customize__diameter-list">
        {sizes.map(d=> <li className={`customize__diameter-item ${diameter == d && "customize__diameter-item--active"}`}
        onClick={()=> setDiameter(d)} key={id}>{d} cm</li>)}
      </ul>
    </div>
    <div className="customize__count">
      <PlusMinus minusItem={minusItem} plusItem={plusItem} />
      </div>
    
    <div class="customize__purchase">
      <span class="customize__price">{price}</span>

        <button class="customize__add" onClick={addToCart}>
      <span className={`customize__add-text`} style={{color: count? 'orange' : ''}}>{count? `Add to cart` : `Add`}</span>
      {count? <span class="customize__add-count">{count}</span> : ''}
      </button>

    </div>
    </>
  )
}
