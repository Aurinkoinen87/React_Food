import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid';



type OrderType = {
   id: number
   title: string
   thickness: string
   diameter: number
   imageUrl: string
   category: number
   price: number
   count: number
   orderId: string 
  }

type StateType = {
   order: OrderType[]
   totalSum: number 
   totalQuantity: number
  }

const initialState: StateType = {
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
        state.order = state.order.map(p=> p.orderId === repeat.orderId? {...p, count: p.count + action.payload.count} : p) 
        state.totalSum = state.order.reduce((acc,el)=> acc + el.price * el.count, 0)
        state.totalQuantity = state.order.reduce((acc,el)=> acc + el.count, 0)
        return
    }
      state.order.push({...action.payload, orderId: uuid()})
      state.totalSum = state.order.reduce((acc,el)=> acc + el.price * el.count, 0)
      state.totalQuantity = state.order.reduce((acc,el)=> acc + el.count, 0)
    },
    deleteFromCart(state, action){ 
      const pizza = state.order.find(p=>  p.orderId === action.payload)
      if(pizza){ 
      const price = pizza.price * pizza.count 
      state.order = state.order.filter(p=> p.orderId !== action.payload)
      state.totalSum -= price 
      state.totalQuantity -= pizza.count  
      }
      return 
    },
    deleteAllFromCart(state){  
      state.totalSum = 0
      state.totalQuantity = 0
      state.order = []      
    },
    minusItem(state, action){
      const pizza = state.order.find(p=>  p.orderId === action.payload)
      if(pizza){ 
      if(pizza.count === 1){
        state.order = state.order.filter(p=> p.orderId !== pizza.orderId)
      } else {        
        state.order = state.order.map(p=> p.orderId === pizza.orderId? {...p, count: --p.count} : p)
      } 
      state.totalSum -= pizza.price 
      state.totalQuantity--
      }
      return
    },
    plusItem(state, action){
      const pizza = state.order.find(p=>  p.orderId === action.payload)
      if(pizza){   
      state.order = state.order.map(p=> p.orderId === pizza.orderId? {...p, count: ++p.count} : p)
      state.totalSum += pizza.price 
      state.totalQuantity++
      }
      return
    }

  }
})

 
export const { addToOrder, deleteFromCart, deleteAllFromCart, minusItem, plusItem } = cartSlice.actions

export default cartSlice.reducer

