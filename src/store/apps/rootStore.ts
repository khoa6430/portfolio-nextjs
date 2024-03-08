import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { rootReducer } from './rootReducer'
import { NEXT_ENV } from '@Configs/endpoints'

export const rootStore = configureStore({
  reducer: rootReducer,
  devTools: NEXT_ENV !== 'production'
})

export type RootState = ReturnType<typeof rootStore.getState>
export type AppDispatch = typeof rootStore.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
