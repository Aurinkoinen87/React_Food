import React, { useState } from 'react'


export function SelectBtns({select}){



  let categories = ['with meat', 'vegetarian', 'cooked on grill', 'spicy', 'cheezy']
  let [cur, setCur] = useState('all')

  const onClickHandler = (val) => {
    select(val)
    setCur(val)
  }


  
  return (
    <div class="btn-block">
    <ul class="btn-block__list">
      <li className={`btn-block__item ${cur == 'all' && "btn-block__item--active"}`} onClick={()=> onClickHandler('all')}>All</li>
      {categories.map((n,i)=> <li className={`btn-block__item ${cur == i && "btn-block__item--active"}`} onClick={()=> onClickHandler(i)}>{n}</li>)}
    </ul>
  </div>
  )
}