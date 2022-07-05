import React from 'react'
import { SvgSelector } from './SvgSelector'




export function Pagination({ pages, setCurrentPage, currentPage }) {




  return (
    <div class="pagination">
      {pages.length > 1 && currentPage !== 1
       && <span class="pagination__arrow" onClick={()=> setCurrentPage(currentPage - 1)}><SvgSelector name={"page-left"}/></span>}
      {pages.map((p,i)=> <span className={`pagination__item ${currentPage == p && `pagination__highlighted`}`} key={i} onClick={()=> setCurrentPage(p)}>{p}</span>)}
      {pages.length > 1 && currentPage !== pages.length
       && <span class="pagination__arrow" onClick={()=> setCurrentPage(currentPage + 1)}><SvgSelector name={"page-right"}/></span>}
    </div>
  )
}
