import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory, dataSelector } from '../redux/slices/dataSlice'
import { setCurrentPage } from '../redux/slices/paginationSlice'


export function SelectBtns(){

  const categories = ['all', 'with meat', 'vegetarian', 'cooked on grill', 'spicy', 'cheezy']

  const dispatch = useDispatch()

  let { category } = useSelector(dataSelector)

  const onClickHandler = (val) => {
    if(category == val) return
    dispatch(setCategory(val))
    dispatch(setCurrentPage(1))
  }

  return (
    <div class="btn-block">
    <ul class="btn-block__list">
      {
      categories.map((n,i)=> <li className={`btn-block__item ${category == i && "btn-block__item--active"}`} onClick={()=> onClickHandler(i)}>{n}</li>)
      }
    </ul>
  </div>
  )
}