import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../redux/slices/dataSlice'


export function SelectBtns(){

  const dispatch = useDispatch()
  const categoriesStr = useSelector((state)=> state.filtration.categories)

  let [num, setNum] = useState(0)

  const onClickHandler = (val) => {
    dispatch(setCategory(val))
    setNum(val)
  }

  return (
    <div class="btn-block">
    <ul class="btn-block__list">
      {
      categoriesStr.map((n,i)=> <li className={`btn-block__item ${num == i && "btn-block__item--active"}`} onClick={()=> onClickHandler(i)}>{n}</li>)
      }
    </ul>
  </div>
  )
}