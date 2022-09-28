import { configureStore } from '@reduxjs/toolkit'
import filtration from './slices/filterSlice'
import pagination from './slices/paginationSlice'




export const store = configureStore({
  reducer: {
    filtration,
    pagination
  },
})