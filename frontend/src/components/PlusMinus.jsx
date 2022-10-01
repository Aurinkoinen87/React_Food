import React from 'react'
import SvgSelector from './SvgSelector'



export const PlusMinus = ({ minusItem, plusItem }) => {
  return (
    <div>

    <button class="btn-count" onClick={minusItem}>
    <SvgSelector name={'minus'}  />
    </button>
      <button class="btn-count" onClick={plusItem}>
    <SvgSelector name={'plus'} />
    </button>
    
    </div>
  )
}
