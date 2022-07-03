import { Pizza } from './Pizza'
import { Select } from './Select'
import { Preloader } from './Preloader'
import { useContext } from 'react'
import { Context } from '../App'








export function Main(){

let{ data, loading, selectCategory, setOption, option } = useContext(Context)


return (
  <section class="menu">
  {loading? <Preloader /> :
  <>
  <Select select={selectCategory} setOption={setOption} option={option}/>

    <h2 class="menu__title">All pizzas</h2>

    <div class="menu__box">
    {data.length? data.map(o => <Pizza {...o} key={o.id} />) : <div class="no_pizza_msg">Didn't find any pizza...</div>}
    </div>
  </>
    }
    
  </section>
  )
}