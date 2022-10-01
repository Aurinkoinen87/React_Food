import React from 'react'
import SvgSelector from './SvgSelector'
import { setCurrentPage } from 'redux/slices/paginationSlice'
import { Context } from 'App'
import { useDispatch } from 'react-redux'


export function Pagination({ currentPage, itemsPerPage }) {

  let{ data, createParams } = React.useContext(Context)

  const dispatch = useDispatch()



  let pagesCount = Math.ceil(data.length / itemsPerPage)

  let pages = []
  
  for(let p = 1; p <= pagesCount; p++){
    pages.push(p)
  }
  
  const nextPage = (pageNum) => {
    dispatch(setCurrentPage(pageNum))
    createParams('page', pageNum)
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
      pages.map((p,i)=> <span className={`pagination__item ${currentPage == p && `pagination__highlighted`}`} key={i} onClick={()=> nextPage(p)}>{p}</span>)
      }
      {pages.length > 1 && currentPage !== pages.length
       && <span class="pagination__arrow" onClick={()=> nextPage(currentPage + 1)}><SvgSelector name={"page-right"}/></span>}
    </div>
  )
}
