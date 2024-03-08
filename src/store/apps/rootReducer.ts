import { combineReducers } from '@reduxjs/toolkit'
import accountReducer from './account'
import profileReducer from './profile'

export const rootReducer = combineReducers({
  account: accountReducer,
  profile: profileReducer
})
