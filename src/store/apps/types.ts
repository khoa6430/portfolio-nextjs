// Global state
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'
import { ProfileState } from './profile/types'
import { AccountState } from 'src/store/apps/account/types'
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, AnyAction>
export interface State {
  account: AccountState
  profile: ProfileState
}
