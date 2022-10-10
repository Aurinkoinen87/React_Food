import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as axios from 'axios'


export const fetchData = createAsyncThunk(
  'main_data/fetchData',
  async () => {
    const response = await axios.get('http://localhost:7000/')
    return response.data
  }
)

const initialState = {
  data: [],
  curData: [],
  loading: 'idle' // 'idle' | 'pending' | 'succeeded'
}


const dataSlice = createSlice({
  name: 'main_data',
  initialState,
  reducers: {
    setInput(state, action){      
    
    },
    setCategory(state, action){
      if(action.payload === 0){
        state.curData = state.data
        return
      }
      state.curData = state.data.filter(el=> el.category === action.payload)
    },
    },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload     
      state.curData = action.payload
      state.loading = 'succeeded'
    })
    builder.addCase(fetchData.pending, (state) => {
      state.loading = 'pending'
    })
    builder.addCase(fetchData.rejected, (state) => {
      state.loading = 'idle'
    })
  },
})

export const dataSelector = (state) => state.mainData



export const { setInput, setCategory } = dataSlice.actions

export default dataSlice.reducer