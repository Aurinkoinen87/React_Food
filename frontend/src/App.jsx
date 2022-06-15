import React, { useState, useEffect } from 'react';
import './scss/style.scss';
import * as axios from 'axios'
import { Pizza } from './components/Pizza'
import { Select } from './components/Select'
import { Header } from './components/Header'





function App() {

  let [data, setData] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:7000/')
    .then(data=> {
      setData(data.data)
      console.log(data.data)
    })
    .catch(err=> console.log(err))
  }, [])





  return (
<div class="wrapper">

    <Header />

    <Select />

<main class="main">
  <section class="menu">
    <h2 class="menu__title">All pizzas</h2>
    <div class="menu__box">

    {data.map(o => <Pizza {...o} key={o.id} />)}


    </div>
  </section>
</main>


</div>
  );
}

export default App;
