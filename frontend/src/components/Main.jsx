import { Pizza } from './Pizza'
import { Select } from './Select'
import { Preloader } from './Preloader'










export function Main({ data, selectCategory, loading, option, setOption }){
return (
  <section class="menu">
  {loading? <Preloader /> :
  <>
  <Select select={selectCategory} setOption={setOption} option={option}/>

    <h2 class="menu__title">All pizzas</h2>

    <div class="menu__box">
    {data.map(o => <Pizza {...o} key={o.id} />)}
    </div>
    </>
    }
    
  </section>
  )
}