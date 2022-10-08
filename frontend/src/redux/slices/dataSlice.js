import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as axios from 'axios'


export const fetchData = createAsyncThunk(
  'main_data/fetchData',
  async () => {
    const response = await axios.get('http://localhost:7000/')
    console.log('1')    
    return response.data
  }
)

const initialState = {
  data: [],
  loading: 'idle' // 'idle' | 'pending' | 'succeeded'
}


const dataSlice = createSlice({
  name: 'main_data',
  initialState,
  reducers: {
    setInput(state, action){      
    
    }
    },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = 'succeeded'
      console.log('2')
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



export const { setInput } = dataSlice.actions

export default dataSlice.reducer