import { Link, Navigate } from "react-router-dom"
import SvgSelector from "../components/SvgSelector"
import { useSelector, useDispatch } from 'react-redux'
import { showClean } from '../redux/slices/msgSlice.js'
import CartPizza from "../components/CartPizza"
import BackBtn from "../components/BackBtn"


export function Cart() {

  const { order, totalSum, totalQuantity } = useSelector((state)=> state.cart)
  const dispatch = useDispatch()



  const onClickHandler = () => dispatch(showClean())

  if(!totalQuantity) return <Navigate to='/empty_cart'/>

return (
<section class="order">

        <div class="cart-top">
          <div class="cart-top__cart">
            <SvgSelector name={'cart'} classSelect={'cart-order'} />
            <h3 class="cart-top__title">Cart</h3>
          </div>

          <div class="cart-top__bin" onClick={onClickHandler}>
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

        <BackBtn />
          <div class="btn-pay">Pay now</div>

        </div>

      </section>
      )
      }