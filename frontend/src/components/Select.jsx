import React, { useState } from 'react'




export function Select({ select }) {

  let categories = ['with meat', 'vegetarian', 'cooked on grill', 'spicy', 'cheezy']
  let [cur, setCur] = useState('all')

  const onClickHandler = (val) => {
    select(val)
    setCur(val)
  }

  return (
    <div class="selection">

  <div class="btn-block">
    <ul class="btn-block__list">
      <li className={`btn-block__item ${cur == 'all' && "btn-block__item--active"}`} onClick={()=> onClickHandler('all')}>All</li>
      {categories.map((n,i)=> <li className={`btn-block__item ${cur == i && "btn-block__item--active"}`} onClick={()=> onClickHandler(i)}>{n}</li>)}
    </ul>
  </div>

  <div class="sort-by">
    <span class="sort-by__sort">Sort by:</span>
    {/* <span class="sort-by__selected">most popular</span>  */}
    <ul class="sort-by__list">
      <li class="sort-by__item">most popular</li>
      <li class="sort-by__item">price</li>
      <li class="sort-by__item">alphabete</li>
    </ul>
  </div>

</div>
  )
} 