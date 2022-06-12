



export function Header() {
  return (
    <header class="header">

  <div class="header__box">

    <div class="logo">
      <svg class="icon icon-local_pizza">
        <use xlinkHref="icons.svg#icon-local_pizza"></use>
      </svg>
      <div class="logo__text-block">
        <h1 class="logo__title">Tasty pizza</h1>
        <p class="logo__text">the most delicious pizza in your town</p>
      </div>
    </div>

    <a class="cart" href="#">
      <div class="cart__inner">
        <span class="cart__price">520</span>

        <div class="cart__cart-box">
          <svg class="icon icon-cart">
            <use xlinkHref="icons.svg#icon-cart"></use>
          </svg>
          <span class="cart__quantity">3</span>
        </div>

      </div>
    </a>


  </div>


  <div class="header__line"></div>
</header>
  )
}