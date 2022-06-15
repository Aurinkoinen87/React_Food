import React, { useState } from 'react'




export function Select() {

  let categories = ['all', 'with meat', 'vegetarian', 'cooked on grill', 'spicy', 'cheezy']


  return (
    <div class="selection">

  <div class="btn-block">
    <ul class="btn-block__list">
      <li class="btn-block__item btn-block__item--active"></li>

    </ul>
  </div>

  <div class="sort-by">
    <span class="sort-by__sort">Sort by:</span>
    {/* <span class="sort-by__selected">most popular</span>  */}
    <ul class="sort-by__list">
      <li class="sort-by__item">most popular</li>
      <li class="sort-by__item">price</li>
      <li class="sort-by__item">alphabete</li>
    </ul>
  </div>

</div>
  )
} 