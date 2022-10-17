import { createSlice } from '@reduxjs/toolkit'




const initialState = {
  addedMsg: false,
  cleanMsg: false,
}


const msgSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    showAdded(state, action){
      state.addedMsg = action.payload
    },
    showClean(state){
      state.cleanMsg = true
    },
    hideClean(state){
      state.cleanMsg = false
    },
    } 
})

 
export const { showAdded, showClean, hideClean } = msgSlice.actions

export default msgSlice.reducer