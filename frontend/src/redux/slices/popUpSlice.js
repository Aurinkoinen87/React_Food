import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  option: 0,
}


const popUpSlice = createSlice({
  name: 'pop-up',
  initialState,
  reducers: {
    setOption(state, action){
      state.option = action.payload
    }
  },
})

 
export const { setOption } = popUpSlice.actions

export default popUpSlice.reducer