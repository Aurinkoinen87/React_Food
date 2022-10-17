import React from 'react'
import { useDispatch } from 'react-redux'
import { hideClean } from '../../redux/slices/msgSlice'
import { deleteAllFromCart } from '../../redux/slices/cartSlice'


function CleanCartMsg() {

  const dispatch = useDispatch()

  const onAgreeHandler = () => {
    dispatch(deleteAllFromCart())
    dispatch(hideClean())
  }
  return (
<div className="clean-cart">
  <div className="clean-cart-wrapper">
  <p className="sure-text">
    Are you sure that you want to delete all items from your cart?
  </p>
  <div className="yes-no-block">
    <span className="yes" onClick={onAgreeHandler} >Yes</span>
    <span className="no" onClick={()=> dispatch(hideClean())} >No</span>
  </div>
  </div>
</div>
  )
}

export default CleanCartMsg