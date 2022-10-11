import React from 'react'
import SvgSelector from './SvgSelector'
import { setCurrentPage } from '../redux/slices/paginationSlice'
import { useSelector, useDispatch } from 'react-redux'
import { dataSelector } from '../redux/slices/dataSlice'


export function Pagination() {


  const dispatch = useDispatch()
  const { curData } = useSelector(dataSelector)
  const { currentPage, itemsPerPage } = useSelector((state)=> state.pagination)


  let pagesCount = Math.ceil(curData.length / itemsPerPage)

  let pages = []
  
  for(let p = 1; p <= pagesCount; p++){
    pages.push(p)
  }
  
  const nextPage = (pageNum) => {
    dispatch(setCurrentPage(pageNum))
  }
  
  let cond1 = pages.length > 1 && currentPage !== 1
  let cond2 = pages.length > 1 && currentPage !== pages.length

  return (
    <div class="pagination">
      
       <span className={"pagination__arrow"} style={{visibility: cond1? 'visible' : 'hidden' }} onClick={()=> nextPage(currentPage - 1)}>
        <SvgSelector name={"page-left"}/>
        </span>
       
      {
      pages.map((p,i)=> <span className={`pagination__item ${currentPage === p && `pagination__highlighted`}`} key={i} onClick={()=> nextPage(p)}>{p}</span>)
      }
      
       <span class="pagination__arrow" style={{visibility: cond2? 'visible' : 'hidden' }} onClick={()=> nextPage(currentPage + 1)}><SvgSelector name={"page-right"}/></span>
    </div>
  )
}
