import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'
import archiveSlice from './archiveSlice'
import { getDefaultMiddleware } from '@reduxjs/toolkit'

const customizedMiddleware = getDefaultMiddleware()

export const store = configureStore({
  reducer: {
    archive: archiveSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
