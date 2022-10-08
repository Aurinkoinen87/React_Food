import { configureStore } from '@reduxjs/toolkit'
import filtration from './slices/filterSlice'
import pagination from './slices/paginationSlice'
import cart from './slices/cartSlice'
import mainData from './slices/dataSlice'





export const store = configureStore({
  reducer: {
    filtration,
    pagination,
    cart,
    mainData,
  },
})