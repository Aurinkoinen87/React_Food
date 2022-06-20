import { Link } from "react-router-dom"




export function Cart() {
return (
<section class="order">

        <div class="cart-top">

          <div class="cart-top__cart">
            <svg class="icon cart-order">
              <use xlinkHref="icons.svg#icon-cart"></use>
            </svg>
            <h3 class="cart-top__title">Cart</h3>
          </div>

          <div class="cart-top__bin">

            <svg class="icon icon-bin">
              <use xlinkHref="icons.svg#icon-bin"></use>
            </svg>

            <div class="cart-top__bin-text">Clean cart</div>
          </div>

        </div>

        <div class="cart-pizza">

          <div class="cart-pizza__line"></div>

          <div class="cart-pizza__item">

            <div class="cart-pizza__name">
              {/* <img class="cart-pizza__img" src="./img/ab2e00d7a5f4.png" alt="pizza"> */}
              <div class="cart-pizza__description">
                <h4 class="cart-pizza__title">Cheezy chicken</h4>
                <p class="cart-pizza__text">thin,26 cm.</p>
              </div>
            </div>

            <div class="cart-pizza__val">
              <svg class="icon icon-minus">
                <use xlinkHref="icons.svg#icon-minus"></use>
              </svg>
              <span class="cart-pizza__num">2</span>
              <svg class="icon icon-plus">
                <use xlinkHref="icons.svg#icon-plus"></use>
              </svg>
            </div>

            <div class="cart-pizza__price">10$</div>

            <svg class="icon icon-cancel-circle">
              <use xlinkHref="icons.svg#icon-cancel-circle"></use>
            </svg>
          </div>

        </div>
        <div class="cart-pizza">

          <div class="cart-pizza__line"></div>

          <div class="cart-pizza__item">

            <div class="cart-pizza__name">
              {/* <img class="cart-pizza__img" src="./img/ab2e00d7a5f4.png" alt="pizza"> */}
              <div class="cart-pizza__description">
                <h4 class="cart-pizza__title">Cheezy chicken</h4>
                <p class="cart-pizza__text">thin,26 cm.</p>
              </div>
            </div>

            <div class="cart-pizza__val">
              <svg class="icon icon-minus">
                <use xlinkHref="icons.svg#icon-minus"></use>
              </svg>
              <span class="cart-pizza__num">2</span>
              <svg class="icon icon-plus">
                <use xlinkHref="icons.svg#icon-plus"></use>
              </svg>
            </div>

            <div class="cart-pizza__price">10$</div>

            <svg class="icon icon-cancel-circle">
              <use xlinkHref="icons.svg#icon-cancel-circle"></use>
            </svg>
          </div>

        </div>

        <div class="cart-pizza">

          <div class="cart-pizza__line"></div>

          <div class="cart-pizza__item">

            <div class="cart-pizza__name">
              {/* <img class="cart-pizza__img" src="./img/ab2e00d7a5f4.png" alt="pizza"> */}
              <div class="cart-pizza__description">
                <h4 class="cart-pizza__title">Cheezy chicken</h4>
                <p class="cart-pizza__text">thin,26 cm.</p>
              </div>
            </div>

            <div class="cart-pizza__val">
              <svg class="icon icon-minus">
                <use xlinkHref="icons.svg#icon-minus"></use>
              </svg>
              <span class="cart-pizza__num">2</span>
              <svg class="icon icon-plus">
                <use xlinkHref="icons.svg#icon-plus"></use>
              </svg>
            </div>

            <div class="cart-pizza__price">10$</div>

            <svg class="icon icon-cancel-circle">
              <use xlinkHref="icons.svg#icon-cancel-circle"></use>
            </svg>
          </div>

        </div>

        <div class="total">

          <div class="total__num">
            <span class="total__num-text">Total amount:</span>
            <span class="total__quantity">3</span>
          </div>

          <div class="total__sum">
            <span class="total__sum-text">Total sum:</span>
            <span class="total__sum-cost">30$</span>
          </div>

        </div>

        <div class="btn-block">
        <Link to={'/'}>
          <div class="btn-return">
            <svg class="icon icon-arrow-left2">
              <use xlinkHref="icons.svg#icon-arrow-left2"></use>
            </svg>

            <div class="btn-return__text">Back</div>

          </div>
        </Link>
          <div class="btn-pay">Pay now</div>

        </div>

      </section>
      )
      }