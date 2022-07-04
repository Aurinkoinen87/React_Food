import React from 'react'

export function Pagination({ pages, setCurrentPage, currentPage }) {




  return (
    <div class="pagination">{pages.map((p,i)=> <span className={`pagination__item ${currentPage == p && `pagination__highlighted`}`} key={i} onClick={()=> setCurrentPage(p)}>{p}</span>)}</div>
  )
}
