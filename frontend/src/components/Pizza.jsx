import React, { useState } from 'react'
import { SvgSelector } from "./SvgSelector"





export function Pizza({ id, imageUrl, title, types, sizes, price, category, rating }) {

let [count, setCount] = useState(0)

const addItem = () => setCount(count + 1)

let thickness = ['thin', 'common']

let [thick, setThick] = useState(types[0])
let [diameter, setDiameter] = useState(sizes[0])

return (
    <div class="pizza">
    <img class="pizza-img" src={imageUrl} alt="menu__pizza"/>
    <h3 class="pizza__title">{title}</h3>
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
    <div class="pizza__purchase">
      <span class="pizza__price">{price}</span>
      <button class="pizza__add" onClick={addItem}>
        <SvgSelector name={'plus'} classSelect={'icon-plus-first'} />
        <span class="pizza__add-text">Add</span>
        {count? <span class="pizza__add-count">{count}</span> : ''}
      </button>
    </div>
  </div>
  )
} 