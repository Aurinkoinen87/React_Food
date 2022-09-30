import { createSlice } from '@reduxjs/toolkit'




const initialState = {
  order: [],
  sum: 0
}


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToOrder(state, action){
      // const pizza = {
      //   id: action.payload.id,
      //   thickness: action.payload.thickness,
      //   size: action.payload.size,
      //   title: action.payload.title,
      //   price: action.payload.price
      // }
      state.order.push(action.payload)
    },
  }
})

 
export const { addToOrder } = cartSlice.actions

export default cartSlice.reducer