import React, { useState } from 'react';



export function SelectPopup() {

  let options = ['most popular', 'price', 'alphabete']

  let [open, setOpen] = useState(false)

  let [option, setOption] = useState(options[0])

  const onClickHandler = (n) => {
    setOption(n)
    setOpen(false)
  }
  return (
    <div class="sort-by">
    <div class="sort-by__sort">Sort by: <span class="sort-by__text" onClick={()=> setOpen(!open)} >{option}</span></div>
    {open && <ul class="sort-by__list">
      {options.map((o,i)=> <li class="sort-by__item" onClick={()=> onClickHandler(o)} key={i}>{o}</li> )}
    </ul>}
  </div>
  )
}