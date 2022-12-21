import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { default as axios } from 'axios'
import { RootStateType } from '../store'


type ItemType = {
  id: number
  imageUrl: string
  title: string
  types: number[]
  sizes: number[]
  price: number
  category: number
  rating: number
}

type StateType = {
  data: ItemType[]
  curData: ItemType[]
  loading: 'idle' | 'pending' | 'succeeded'
  category: number
}

export const fetchData = createAsyncThunk(
  'main_data/fetchData',
  async () => {
    const response = await axios.get<ItemType[]>('http://localhost:7000/')
    return response.data
  }
)

const initialState = {
  data: [],
  curData: [],
  loading: 'idle', // 'idle' | 'pending' | 'succeeded'
  category: 0
} as StateType


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

export const dataSelector = (state: RootStateType) => state.mainData



export const { setInput, setCategory, setLoading } = dataSlice.actions

export default dataSlice.reducer