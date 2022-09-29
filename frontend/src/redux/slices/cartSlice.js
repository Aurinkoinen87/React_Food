import { createSlice } from '@reduxjs/toolkit'




const initialState = {
  order: []
}


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToOrder(state, action){
      state.order.push(action.payload)
    },
  }
})

 
export const {  } = cartSlice.actions

export default cartSlice.reducer