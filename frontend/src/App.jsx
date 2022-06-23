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
  let [loading, setLoading] = useState(true)

  useEffect(()=> {
    axios.get('http://localhost:7000/')
    .then(data=> {
      setTimeout(()=> {
        setInitData(data.data)
        setData(data.data)
        setLoading(false)
      }, 2000)

    })
    .catch(err=> console.log(err))
    // .finally(setLoading(false))??
  }, [])


const selectCategory = (num = 'all') => {
  if(num == 'all') {
    setData(initData)
    return
  }
  data = initData.filter(o=> o.category == num)
  setData(data)
}


let [option, setOption] = useState(0)

if(option == 0){
    data = [...data].sort((a,b)=> b.rating - a.rating)
    }   
if(option == 1){
  data = [...data].sort((a,b)=> b.price - a.price)
}
if(option == 2){
  data = [...data].sort((a,b)=> {
    if(a.title > b.title) return 1
    if(a.title < b.title) return -1
    if(a.title == b.title) return 0
  })
    }




  return (
<div class="wrapper">

    <Header />


<main class="main">

    <Routes>
      <Route path="/" element={<Main data={data} loading={loading} selectCategory={selectCategory} setOption={setOption} option={option} />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/empty_cart" element={<EmptyCart />}/>
      <Route path="*" element={<div class="not-found">Nothing was found</div>}/>
    </Routes>
</main>


</div>
  );
}

export default App;
