import pizza from '../img/4b3a81ba-04b5-4f51-9fd4-a0867ee000de.png'








export function Pizza() {
  return (
    <div class="pizza">
    <img class="pizza-img" src={pizza} alt="menu__pizza"/>
    <h3 class="pizza__title">Sea abundance</h3>
    <div class="pizza__customize">
      <ul class="pizza__thickness-list">
        <li class="pizza__thickness-item pizza__thickness-item--active">thin</li>
        <li class="pizza__thickness-item">common</li>
      </ul>
      <ul class="pizza__diameter-list">
        <li class="pizza__diameter-item pizza__diameter-item--active">26cm</li>
        <li class="pizza__diameter-item">30cm</li>
        <li class="pizza__diameter-item">40cm</li>
      </ul>
    </div>
    <div class="pizza__purchase">
      <span class="pizza__price">8$</span>
      <div class="pizza__add">
        <svg class="icon icon-plus-first">
          <use xlinkHref="icons.svg#icon-plus"></use>
        </svg>
        <span class="pizza__add-text">Add</span>
      </div>
    </div>
  </div>
  )
} 