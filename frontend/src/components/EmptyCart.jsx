import { Link } from "react-router-dom"




export function EmptyCart() {
return (
     <div class="empty">
     <h4 class="empty__title">Your cart is empty</h4>
     <p class="empty__text">It is likely that you haven't ordered your pizza yet. To make your order go to the main
       page</p>
     {/* <img class="empty__img" src="./img/cart.png" alt="empty-cart"> */}
    <Link to={'/'}>
     <div class="btn-return">
       <svg class="icon icon-arrow-left2">
         <use xlinkHref="icons.svg#icon-arrow-left2"></use>
       </svg>
       <div class="btn-return__text">Back</div>
     </div>
     </Link>
   </div>
   )
   }