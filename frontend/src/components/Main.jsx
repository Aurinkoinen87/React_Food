import { Pizza } from './Pizza'
import { Select } from './Select'
import { Preloader } from './Preloader'
import { useContext } from 'react'
import { Context } from '../App'
import { Pagination } from './Pagination'







export function Main(){

let{ data, loading, selectCategory, setOption, option, setCurrentPage, currentPage, itemsPerPage } = useContext(Context)

let pagesCount = Math.ceil(data.length / itemsPerPage)

let pages = []

for(let p = 1; p <= pagesCount; p++){
  pages.push(p)
}

let pageLastItemIndex = itemsPerPage*currentPage
let pageFirstItemIndex = pageLastItemIndex - itemsPerPage


return (
  <section class="menu">
  {loading? <Preloader /> :
  <>
  <Select select={selectCategory} setOption={setOption} option={option}/>

    <h2 class="menu__title">Menu</h2>

    <div class="menu__box">
    {data.length? data.slice(pageFirstItemIndex, pageLastItemIndex)
    .map(o => <Pizza {...o} key={o.id} />) : <div class="no_pizza_msg">Didn't find any pizza...</div>}
    </div>
  </>
    }
    <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
  </section>
  )
}