import React from 'react';
import './scss/style.scss';
import { Pizza } from './components/Pizza'
import { Select } from './components/Select'
import { Header } from './components/Header'





function App() {
  return (
<div class="wrapper">

    <Header />

    <Select />

<main class="main">
  <section class="menu">
    <h2 class="menu__title">All pizzas</h2>
    <div class="menu__box">

    {[1,2,3,4,5,6,7,8].map(p=> {return <Pizza />})}


    </div>
  </section>
</main>


</div>
  );
}

export default App;
