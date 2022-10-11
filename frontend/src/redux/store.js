import { configureStore } from '@reduxjs/toolkit'
import popUp from './slices/popUpSlice'
import pagination from './slices/paginationSlice'
import cart from './slices/cartSlice'
import mainData from './slices/dataSlice'





export const store = configureStore({
  reducer: {
    popUp,
    pagination,
    cart,
    mainData,
  },
})