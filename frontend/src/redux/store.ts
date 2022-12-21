import { configureStore } from '@reduxjs/toolkit'
import popUp from './slices/popUpSlice'
import pagination from './slices/paginationSlice'
import cart from './slices/cartSlice'
import mainData from './slices/dataSlice'
import messages from './slices/msgSlice'






export const store = configureStore({
  reducer: {
    popUp,
    pagination,
    cart,
    mainData,
    messages
  },
})


export type RootStateType = ReturnType<typeof store.getState>