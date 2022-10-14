import React, { useEffect } from 'react'
import { Pizza } from '../components/Pizza'
import { Select } from '../components/Select'
import { Preloader } from '../components/Preloader'
import { Pagination } from '../components/Pagination'
import { dataSelector } from '../redux/slices/dataSlice'
import Added from '../components/Added'
import { showAdded } from '../redux/slices/msgSlice'
import { useSelector, useDispatch } from 'react-redux'








export function Main({ data }){

const { loading } = useSelector(dataSelector)
const { addedMsg } = useSelector((state)=> state.messages)
const dispatch = useDispatch()
let { currentPage, itemsPerPage } = useSelector((state)=> state.pagination)
let pageLastItemIndex = itemsPerPage*currentPage
let pageFirstItemIndex = pageLastItemIndex - itemsPerPage
data = data.slice(pageFirstItemIndex, pageLastItemIndex)

useEffect(()=> {
  function send(){
    dispatch(showAdded(false))
  }
  if(addedMsg) setTimeout(send, 3000)
  return ()=> clearTimeout(send)
},[addedMsg])



return (
  <section class="menu">
  {loading !== 'succeeded'? <Preloader /> :
  <>
  <Select />

    <h2 class="menu__title">Menu</h2>

    {addedMsg && <Added />}
    
    <div class="menu__box">
    {data.length? 
    data.map(o => <Pizza {...o} key={o.id} />) : <div class="no_pizza_msg">Didn't find any pizza...</div>}
    </div>
  </>
    }
    <Pagination />
  </section>
  )
}