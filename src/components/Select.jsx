




export function Select() {
  return (
    <div class="selection">

  <div class="btn-block">
    <ul class="btn-block__list">
      <li class="btn-block__item btn-block__item--active">all</li>
      <li class="btn-block__item">with meat</li>
      <li class="btn-block__item">vegetarian</li>
      <li class="btn-block__item">cooked on grill</li>
      <li class="btn-block__item">spicy</li>
      <li class="btn-block__item">cheezy</li>
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