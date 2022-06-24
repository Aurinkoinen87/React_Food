import { Link } from "react-router-dom"
import { SvgSelector } from "./SvgSelector"



export function Header() {


  console.log(window.location.pathname)
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
    <div class="search">
    <SvgSelector name={'search'} />
    <input class="search__input" type="text" placeholder="find your pizza..."/>
    </div>


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