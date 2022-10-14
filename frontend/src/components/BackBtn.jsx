import React from 'react'
import { useNavigate } from "react-router-dom"
import SvgSelector from "./SvgSelector"

export default function BackBtn() {

  const navigate = useNavigate()

  const onClickHandler = () => navigate(-1)
  return (
    <div class="btn-return" onClick={onClickHandler}>

    <SvgSelector name={'arrow-left'} />
    <div class="btn-return__text">Back</div>
    
    </div>
    )
}
