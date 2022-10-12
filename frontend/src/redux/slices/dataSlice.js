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
  loading: 'idle', // 'idle' | 'pending' | 'succeeded'
  category: 0
}


const dataSlice = createSlice({
  name: 'main_data',
  initialState,
  reducers: {
    setInput(state, action){ 
      state.curData = state.data.filter(el=> el.title.toLowerCase().includes(action.payload.toLowerCase()))
    },
    setCategory(state, action){
      if(action.payload === 0){
        state.curData = state.data
        state.category = action.payload
        return
      }
      state.curData = state.data.filter(el=> el.category === action.payload)
      state.category = action.payload
    },
    setLoading(state, action){
      state.loading = action.payload
    }
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



export const { setInput, setCategory, setLoading } = dataSlice.actions

export default dataSlice.reducer