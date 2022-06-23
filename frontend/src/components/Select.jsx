import React, { useState } from 'react'
import { SelectBtns } from './SelectBtns'
import { SelectPopup } from './SelectPopup'



export function Select({ select, option, setOption }) {

  return (
    <div class="selection">

    <SelectBtns select={select} />
    <SelectPopup setOption={setOption} option={option} />
    </div>
  )
} 