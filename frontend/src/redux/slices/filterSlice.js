import { createSlice } from '@reduxjs/toolkit'




const initialState = {
  category: 'all',
  option: 0,
}


const filterSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory(state, action){
      state.category = action.payload
    },
    setOption(state, action){
      state.option = action.payload
    },
    setFilters(state, action){
      state.category = action.payload.category
      state.option = action.payload.option

    },
  }
})

 
export const { setCategory, setOption, setFilters } = filterSlice.actions

export default filterSlice.reducer