import React, { useEffect } from 'react';
import './scss/style.scss';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, dataSelector } from './redux/slices/dataSlice'
import { Cart } from './pages/Cart'
import { Main } from './pages/Main'
import EmptyCart from './pages/EmptyCart'
import { Routes, Route } from "react-router-dom";
import Template from './layout/Template'
import Item from './pages/Item'





function App() {


  const dispatch = useDispatch()

  useEffect(()=> {
    setTimeout(()=> {
      dispatch(fetchData())
      window.scrollTo(0, 0)
    }, 1500)
  }, [])

  let { curData } = useSelector(dataSelector)

  const { option } = useSelector((state)=> state.popUp)



if(option == 0){
  curData = [...curData].sort((a,b)=> b.rating - a.rating)
    }   
if(option == 1){
  curData = [...curData].sort((a,b)=> b.price - a.price)
}
if(option == 2){
  curData = [...curData].sort((a,b)=> a.price - b.price)
}
if(option == 3){
  curData = [...curData].sort((a,b)=> {
    if(a.title > b.title) return 1
    if(a.title < b.title) return -1
    if(a.title == b.title) return 0
  })
    }


  return (
    <Routes>
      <Route path="/" element={<Template />}>
      <Route path="" element={<Main data={curData} />}/>
      <Route path="cart" element={<Cart />}/>
      <Route path="empty_cart" element={<EmptyCart />}/>
      <Route path="item/:id" element={<Item />}/>
      <Route path="*" element={<div class="not-found">Nothing was found</div>}/>
      </Route>
    </Routes>
  );
}

export default App;
