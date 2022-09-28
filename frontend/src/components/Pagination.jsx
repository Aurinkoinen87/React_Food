import React from 'react'
import { SvgSelector } from './SvgSelector'
import { setCurrentPage } from 'redux/slices/paginationSlice'
import { Context } from 'App'
import { useSelector, useDispatch } from 'react-redux'


export function Pagination({ currentPage, itemsPerPage }) {

  let{ data } = React.useContext(Context)

  const dispatch = useDispatch()



  let pagesCount = Math.ceil(data.length / itemsPerPage)

  let pages = []
  
  for(let p = 1; p <= pagesCount; p++){
    pages.push(p)
  }
  



  return (
    <div class="pagination">
      {
      pages.length > 1 && currentPage !== 1
       && <span class="pagination__arrow" onClick={()=> dispatch(setCurrentPage(currentPage - 1))}>
        <SvgSelector name={"page-left"}/>
        </span>
       }
      {
      pages.map((p,i)=> <span className={`pagination__item ${currentPage == p && `pagination__highlighted`}`} key={i} onClick={()=> dispatch(setCurrentPage(p))}>{p}</span>)
      }
      {pages.length > 1 && currentPage !== pages.length
       && <span class="pagination__arrow" onClick={()=> dispatch(setCurrentPage(currentPage + 1))}><SvgSelector name={"page-right"}/></span>}
    </div>
  )
}
