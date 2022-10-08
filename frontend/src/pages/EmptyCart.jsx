import { Link } from "react-router-dom"
import cartImg from '../assets/img/cart.png'
import SvgSelector from "../components/SvgSelector"



export default function EmptyCart() {

  
return (
     <div class="empty">
     <h4 class="empty__title">Your cart is empty</h4>
     <p class="empty__text">It looks like you haven't ordered your pizza yet. To make your order go back to the main
       page</p>
     <img class="empty__img" src={cartImg} alt="empty-cart"/>
    <Link to={'/'}>
     <div class="btn-return">
     <SvgSelector name={'arrow-left'} />
       <div class="btn-return__text">Back</div>
     </div>
     </Link>
   </div>
   )
   }