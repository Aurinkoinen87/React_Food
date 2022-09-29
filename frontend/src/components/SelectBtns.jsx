import React, { useContext } from 'react'
import { Context } from '../App'
import { useSelector } from 'react-redux'


export function SelectBtns(){

  const{ selectCategory, createParams } = useContext(Context)

  const category = useSelector((state)=> state.filtration.category)

   
  const categories = ['with meat', 'vegetarian', 'cooked on grill', 'spicy', 'cheezy']

  const onClickHandler = (val) => {
    selectCategory(val)
    createParams('category', val)
  }


  
  return (
    <div class="btn-block">
    <ul class="btn-block__list">
      <li className={`btn-block__item ${category == 'all' && "btn-block__item--active"}`}
       onClick={()=> onClickHandler('all')}>All</li>
      {categories.map((n,i)=> <li className={`btn-block__item ${category == i && "btn-block__item--active"}`} onClick={()=> onClickHandler(i)}>{n}</li>)}
    </ul>
  </div>
  )
}