import { createSlice } from '@reduxjs/toolkit'




const initialState = {
  addedMsg: false
}


const msgSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    showAdded(state, action){
      state.addedMsg = action.payload
    }
    } 
})

 
export const { showAdded } = msgSlice.actions

export default msgSlice.reducer