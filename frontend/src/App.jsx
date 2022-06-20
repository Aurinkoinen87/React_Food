import React, { useState, useEffect } from 'react';
import './scss/style.scss';
import * as axios from 'axios'

import { Header } from './components/Header'
import { Cart } from './components/Cart'
import { Main } from './components/Main'
import { EmptyCart } from './components/EmptyCart'

import {
  Routes,
  Route,
} from "react-router-dom";




function App() {

  let [initData, setInitData] = useState([])
  let [data, setData] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:7000/')
    .then(data=> {
      setInitData(data.data)
      setData(data.data)
    })
    .catch(err=> console.log(err))
  }, [])


const selectCategory = (num = 'all') => {
  if(num == 'all') {
    setData(initData)
    return
  }
  data = initData.filter(o=> o.category == num)
  setData(data)
}


  return (
<div class="wrapper">

    <Header />


<main class="main">
    
    <Routes>
      <Route path="/" element={<Main data={data} selectCategory={selectCategory} />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/empty_cart" element={<EmptyCart />}/>
      <Route path="*" element={<div class="not-found">Nothing was found</div>}/>
    </Routes>
</main>


</div>
  );
}

export default App;
