import React, { useState } from 'react'
import { SelectBtns } from './SelectBtns'
import { SelectPopup } from './SelectPopup'



export function Select({ option, setOption }) {

  return (
    <div class="selection">

    <SelectBtns />
    <SelectPopup />
    </div>
  )
} 