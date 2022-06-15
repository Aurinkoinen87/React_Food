import pizza from '../img/4b3a81ba-04b5-4f51-9fd4-a0867ee000de.png'
import React, { useState } from 'react'


// {
//   "id": 0,
//   "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
//   "title": "Пепперони Фреш с перцем",
//   "types": [0, 1],
//   "sizes": [26, 30, 40],
//   "price": 803,
//   "category": 0,
//   "rating": 4
// }



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
        <svg class="icon icon-plus-first">
          <use xlinkHref="icons.svg#icon-plus"></use>
        </svg>
        <span class="pizza__add-text">Add</span>
        {count? <span class="pizza__add-count">{count}</span> : ''}
      </button>
    </div>
  </div>
  )
} 