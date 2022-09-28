import { Pizza } from 'components/Pizza'
import { Select } from 'components/Select'
import { Preloader } from 'components/Preloader'
import { useContext } from 'react'
import { Context } from 'App'
import { Pagination } from 'components/Pagination'
import { useSelector } from 'react-redux'







export function Main(){

let{ data, loading, selectCategory } = useContext(Context)

let { currentPage, itemsPerPage } = useSelector((state)=> state.pagination)
let pageLastItemIndex = itemsPerPage*currentPage
let pageFirstItemIndex = pageLastItemIndex - itemsPerPage
data = data?.slice(pageFirstItemIndex, pageLastItemIndex) || []

return (
  <section class="menu">
  {loading? <Preloader /> :
  <>
  <Select select={selectCategory} />

    <h2 class="menu__title">Menu</h2>

    <div class="menu__box">
    {data.length? 
    data.map(o => <Pizza {...o} key={o.id} />) : <div class="no_pizza_msg">Didn't find any pizza...</div>}
    </div>
  </>
    }
    <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} />
  </section>
  )
}