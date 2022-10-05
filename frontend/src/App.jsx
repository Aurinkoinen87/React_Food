import React, { useState, useEffect } from 'react';
import './scss/style.scss';
import * as axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory, setFilters } from './redux/slices/filterSlice'
import { setCurrentPage } from 'redux/slices/paginationSlice'

import { Header } from './components/Header'
import { Cart } from 'pages/Cart'
import { Main } from 'pages/Main'
import EmptyCart from 'pages/EmptyCart'

import {
  Routes,
  Route,
  useSearchParams
} from "react-router-dom";





export const Context = React.createContext('')


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
    .catch(err=> {
      console.log(err)
      setLoading(false)
    })
    // .finally(setLoading(false))??
    window.scrollTo(0, 0)
  }, [])

  const dispatch = useDispatch()
  const { category, option, inputValue } = useSelector((state)=> state.filtration)
  let { currentPage } = useSelector((state)=> state.pagination)

  const selectCategory = (num = 'all') => {
    dispatch(setCategory(num))
    setCurrentPage(1)
    if(num == 'all') {
      setData(initData)
      return
    }
    if(!data.length) console.log('EBAAAAS')
    data = initData.filter(o=> o.category == num)
    setData(data)
  }

  const params = {}
  params.category = category
  params.option = option
  params.page = currentPage

  const[searchParams, setSearchParams] = useSearchParams()
  useEffect(()=> {
    const check = searchParams.get(category) || ''
    if(!check) setSearchParams({...searchParams})
  },[])
  const createParams = (key, value) => {
    params[key] = value
    setSearchParams({...searchParams, ...params})
  }

  console.log(searchParams)


  const findPizza = (str) => {
    data = data.filter(o=> o.title.toLowerCase().includes(str.toLowerCase()))
  }
  
  if(inputValue){
    findPizza(inputValue)
  }

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


  return (
<div class="wrapper">
<Context.Provider value={{ data, loading, selectCategory, findPizza, initData, setData, createParams }}>
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
