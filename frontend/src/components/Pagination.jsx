import React from 'react'
import SvgSelector from './SvgSelector'
import { setCurrentPage } from '../redux/slices/paginationSlice'
import { useSelector, useDispatch } from 'react-redux'
import { dataSelector } from '../redux/slices/dataSlice'


export function Pagination({ currentPage, itemsPerPage }) {


  const dispatch = useDispatch()
  const data = useSelector(dataSelector)


  let pagesCount = Math.ceil(data.length / itemsPerPage)

  let pages = []
  
  for(let p = 1; p <= pagesCount; p++){
    pages.push(p)
  }
  
  const nextPage = (pageNum) => {
    dispatch(setCurrentPage(pageNum))
  }


  return (
    <div class="pagination">
      {
      pages.length > 1 && currentPage !== 1
       && <span class="pagination__arrow" onClick={()=> nextPage(currentPage - 1)}>
        <SvgSelector name={"page-left"}/>
        </span>
       }
      {
      pages.map((p,i)=> <span className={`pagination__item ${currentPage === p && `pagination__highlighted`}`} key={i} onClick={()=> nextPage(p)}>{p}</span>)
      }
      {pages.length > 1 && currentPage !== pages.length
       && <span class="pagination__arrow" onClick={()=> nextPage(currentPage + 1)}><SvgSelector name={"page-right"}/></span>}
    </div>
  )
}
