import React, { useState } from 'react';



export function SelectPopup({ setOption, option }) {


  let [open, setOpen] = useState(false)

  let options = ['most popular', 'price (desc)', 'price (asc)', 'alphabete']

  const onClickHandler = (n) => {
    setOption(n)
    setOpen(false)
  }
  return (
    <div class="sort-by">
    <div class="sort-by__sort">Sort by: <span class="sort-by__text" onClick={()=> setOpen(!open)} >{options[option]}</span></div>
    {open && <ul class="sort-by__list">
      {options.map((o,i)=> <li class="sort-by__item" onClick={()=> onClickHandler(i)} key={i}>{o}</li> )}
    </ul>}
  </div>
  )
}