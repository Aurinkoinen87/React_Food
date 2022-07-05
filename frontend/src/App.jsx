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





export const Context = React.createContext('')


function App() {

  let [initData, setInitData] = useState([])
  let [data, setData] = useState([])
  let [loading, setLoading] = useState(true)
  let [value, setValue] = useState('')
  let [category, setCategory] = useState('all')
  let [currentPage, setCurrentPage] = useState(1)
  let [itemsPerPage] = useState(4)

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
    window.scrollTo(0, 0)
  }, [])


const selectCategory = (num = 'all') => {
  setCategory(num)
  setCurrentPage(1)
  if(num == 'all') {
    setData(initData)
    return
  }
  data = initData.filter(o=> o.category == num)
  setData(data)
}


const clearInput = () => {
  setValue('')
  setData(initData)
  selectCategory(category)
}

let [option, setOption] = useState(0)

if(option == 0){
    data = [...data].sort((a,b)=> b.rating - a.rating)
    }   
if(option == 1){
  data = [...data].sort((a,b)=> b.price - a.price)
}
if(option == 2){
  data = [...data].sort((a,b)=> a.price - b.price)
}
if(option == 3){
  data = [...data].sort((a,b)=> {
    if(a.title > b.title) return 1
    if(a.title < b.title) return -1
    if(a.title == b.title) return 0
  })
    }



    
const findPizza = (str) => {
  data = data.filter(o=> o.title.toLowerCase().includes(str.toLowerCase()))
}

if(value){
  findPizza(value)
}





  return (
<div class="wrapper">
<Context.Provider value={{ data, loading, selectCategory, setOption, option, findPizza, value, setValue, initData, setData, category, setCategory, clearInput, currentPage, setCurrentPage, itemsPerPage }}>
    <Header />


<main class="main">

    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/empty_cart" element={<EmptyCart />}/>
      <Route path="*" element={<div class="not-found">Nothing was found</div>}/>
    </Routes>
</main>

</Context.Provider>
</div>
  );
}

export default App;
