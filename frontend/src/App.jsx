import React, { useEffect } from 'react';
import './scss/style.scss';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from './redux/slices/dataSlice'
import { Header } from './components/Header'
import { Cart } from './pages/Cart'
import { Main } from './pages/Main'
import EmptyCart from './pages/EmptyCart'
import { dataSelector } from './redux/slices/dataSlice'
import {
  Routes,
  Route
} from "react-router-dom";



function App() {


  const dispatch = useDispatch()

  useEffect(()=> {
    setTimeout(()=> {
      dispatch(fetchData())
      window.scrollTo(0, 0)
    }, 1500)
  }, [])

  let { data } = useSelector(dataSelector)

  const { option } = useSelector((state)=> state.filtration)



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
    <Header />
<main class="main">

    <Routes>
      <Route path="/" element={<Main data={data} />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/empty_cart" element={<EmptyCart />}/>
      <Route path="*" element={<div class="not-found">Nothing was found</div>}/>
    </Routes>
</main>

</div>
  );
}

export default App;
