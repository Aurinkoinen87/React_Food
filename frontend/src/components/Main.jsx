import { Pizza } from './Pizza'
import { Select } from './Select'










export function Main({ data, selectCategory }){
return (
  <section class="menu">
  <Select select={selectCategory}/>

    <h2 class="menu__title">All pizzas</h2>
    <div class="menu__box">

    {data.map(o => <Pizza {...o} key={o.id} />)}


    </div>
  </section>
  )
}