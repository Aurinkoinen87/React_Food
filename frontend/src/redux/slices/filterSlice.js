import { createSlice } from '@reduxjs/toolkit'




const initialState = {
  category: 'all',
  option: 0,
  inputValue: '',
}


const filterSlice = createSlice({
  name: 'filtration',
  initialState,
  reducers: {
    setCategory(state, action){
      state.category = action.payload
    },
    setOption(state, action){
      state.option = action.payload
    },
    setInputValue(state, action){
      state.inputValue = action.payload
    },
    setFilters(state, action){
      state.category = action.payload.cat
      state.option = action.payload.opt

    },
  }
})

 
export const { setCategory, setOption, setInputValue, setFilters } = filterSlice.actions

export default filterSlice.reducer