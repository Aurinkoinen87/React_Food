import { Pizza } from '../components/Pizza'
import { Select } from '../components/Select'
import { Preloader } from '../components/Preloader'
import { Pagination } from '../components/Pagination'
import { useSelector } from 'react-redux'
import { dataSelector } from '../redux/slices/dataSlice'







export function Main({ data }){

const { loading } = useSelector(dataSelector)
let { currentPage, itemsPerPage } = useSelector((state)=> state.pagination)
let pageLastItemIndex = itemsPerPage*currentPage
let pageFirstItemIndex = pageLastItemIndex - itemsPerPage
data = data.slice(pageFirstItemIndex, pageLastItemIndex)

return (
  <section class="menu">
  {loading !== 'succeeded'? <Preloader /> :
  <>
  <Select />

    <h2 class="menu__title">Menu</h2>

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