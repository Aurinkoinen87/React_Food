import { Link } from "react-router-dom"
import { SvgSelector } from "./SvgSelector"
import { SearchInput } from './SearchInput'

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


    <Link class="cart" to={'cart'}>
      <div class="cart__inner">
        <span class="cart__price">520</span>

        <div class="cart__cart-box">
        <SvgSelector name={'cart'} classSelect={'icon-cart'} />

          <span class="cart__quantity">3</span>
        </div>

      </div>
    </Link>


  </div>


  <div class="header__line"></div>
</header>
  )
}