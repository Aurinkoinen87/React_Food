import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setOption } from '../redux/slices/popUpSlice'


export function SelectPopup() {

  const dispatch = useDispatch()
  const { option } = useSelector((state)=> state.popUp)

  let [open, setOpen] = useState(false)

  const options = ['most popular', 'price (desc)', 'price (asc)', 'alphabete']

  const onClickHandler = (n) => {
    dispatch(setOption(n))
    setOpen(false)
  }

  const sortRef = useRef()

  useEffect(()=> {
    const handleClick = (event) => {
      if(!event.path.includes(sortRef.current)){
        setOpen(false)
      }      
    }
    document.body.addEventListener('click', handleClick)
    return ()=> document.body.removeEventListener('click', handleClick)
  },[])

      

  return (
    <div class="sort-by" ref={sortRef}>
    <div class="sort-by__sort" onClick={()=> setOpen(!open)} ><label>Sort by: </label><span class="sort-by__text">{options[option]}</span></div>
    {open && <ul class="sort-by__list">
      {options.map((o,i)=> <li class="sort-by__item" onClick={()=> onClickHandler(i)} key={i}>{o}</li> )}
    </ul>}
  </div>
  )
}