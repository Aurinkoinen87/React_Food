import { Link } from "react-router-dom"
import SvgSelector from "./SvgSelector"
import { SearchInput } from './SearchInput'
import GoToCart from './GoToCart'


export function Header() {



  return (
    <header class="header">

  <div class="header__box">
    <Link to={'/'}>
    <div class="logo">
    <SvgSelector name={'logo-pizza'} />
      <div class="logo__text-block">
        <h1 class="logo__title">Tasty pizza</h1>
        <p class="logo__text">the most delicious pizza in your town</p>
      </div>
    </div>
    </Link>

    <SearchInput />

    <GoToCart />



  </div>


  <div class="header__line"></div>
</header>
  )
}