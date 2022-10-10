import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  categories: ['all', 'with meat', 'vegetarian', 'cooked on grill', 'spicy', 'cheezy'],
  option: 0,
}


const filterSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setOption(state, action){
      state.option = action.payload
    }
  },
})

 
export const { setCategory, setOption, setFilters } = filterSlice.actions

export default filterSlice.reducer