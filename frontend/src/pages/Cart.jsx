import { Link } from "react-router-dom"
import SvgSelector from "components/SvgSelector"
import { useSelector, useDispatch } from 'react-redux'
import CartPizza from "components/CartPizza"



export function Cart() {

  const { order, totalSum, totalQuantity } = useSelector((state)=> state.cart)
  const dispatch = useDispatch()

return (
<section class="order">

        <div class="cart-top">

          <div class="cart-top__cart">
            <SvgSelector name={'cart'} classSelect={'cart-order'} />
            <h3 class="cart-top__title">Cart</h3>
          </div>

          <div class="cart-top__bin">
          <SvgSelector name={'bin'} />

            <div class="cart-top__bin-text">Clean cart</div>
          </div>

        </div>

        {order.map(p=> <CartPizza key={p.id} {...p} />)}
       

        <div class="total">

          <div class="total__num">
            <span class="total__num-text">Total amount:</span>
            <span class="total__quantity">{totalQuantity}</span>
          </div>

          <div class="total__sum">
            <span class="total__sum-text">Total sum:</span>
            <span class="total__sum-cost">{totalSum + ' RUR'}</span>
          </div>

        </div>

        <div class="btn-block">
        <Link to={'/'}>
          <div class="btn-return">
          <SvgSelector name={'arrow-left'} />

            <div class="btn-return__text">Back</div>

          </div>
        </Link>
          <div class="btn-pay">Pay now</div>

        </div>

      </section>
      )
      }