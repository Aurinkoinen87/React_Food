import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid';




const initialState = {
  order: [],
  totalSum: 0,
  totalQuantity: 0
}



const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToOrder(state, action){
      const repeat = state.order.find(p=> action.payload.title === p.title && action.payload.thickness === p.thickness && action.payload.diameter === p.diameter && action.payload.price === p.price)
      if(repeat){
        state.order = state.order.map(p=> p.id === repeat.id? {...p, count: p.count + action.payload.count} : p) 
        state.totalSum = state.order.reduce((acc,el)=> acc + el.price * el.count, 0)
        state.totalQuantity = state.order.reduce((acc,el)=> acc + el.count, 0)
        return
    }
      state.order.push({...action.payload, id: uuid()})
      state.totalSum = state.order.reduce((acc,el)=> acc + el.price * el.count, 0)
      state.totalQuantity = state.order.reduce((acc,el)=> acc + el.count, 0)
    },
    deleteFromCart(state, action){ 
      const pizza = state.order.find(p=>  p.id === action.payload)  
      const price = pizza.price * pizza.count 
      state.order = state.order.filter(p=> p.id !== action.payload)
      state.totalSum -= price 
      state.totalQuantity -= pizza.count   
    },
    deleteAllFromCart(state){  
      state.totalSum = 0
      state.totalQuantity = 0
      state.order = []      
    },
    minusItem(state, action){
      const pizza = state.order.find(p=>  p.id === action.payload) 
      if(pizza.count === 1){
        state.order = state.order.filter(p=> p.id !== pizza.id)
      } else {        
        state.order = state.order.map(p=> p.id === pizza.id? {...p, count: --p.count} : p)
      } 
      state.totalSum -= pizza.price 
      state.totalQuantity--
    },
    plusItem(state, action){
      const pizza = state.order.find(p=>  p.id === action.payload)  
      state.order = state.order.map(p=> p.id === pizza.id? {...p, count: ++p.count} : p)
      state.totalSum += pizza.price 
      state.totalQuantity++
    }
  }
})

 
export const { addToOrder, deleteFromCart, deleteAllFromCart, minusItem, plusItem } = cartSlice.actions

export default cartSlice.reducer

