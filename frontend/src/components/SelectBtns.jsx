import React, { useContext } from 'react'
import { Context } from '../App'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage } from 'redux/slices/paginationSlice.js'

export function SelectBtns(){

  const{ selectCategory } = useContext(Context)
  const dispatch = useDispatch()
  const category = useSelector((state)=> state.filtration.category)

   
  const categories = ['with meat', 'vegetarian', 'cooked on grill', 'spicy', 'cheezy']

  const onClickHandler = (val) => {
    selectCategory(val)
    dispatch(setCurrentPage(1))
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