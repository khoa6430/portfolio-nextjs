import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AccountState, IAccount } from './types'

const initialState: AccountState = {
  myAccount: {
    loading: false,
    error: ''
  },

  signIn: {
    loading: false,
    error: ''
  },

  signUp: {
    loading: false,
    error: ''
  }
}

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    signInRequest: state => {
      state.signIn.loading = true
      state.signIn.error = ''
    },
    signInSuccess: (state, data) => {
      state.signIn.loading = false
      state.signIn.error = ''
      state.myAccount.accessToken = data.payload.access_token
    },
    signInFailure: (state, data) => {
      state.signIn.loading = false
      state.signIn.error = data.payload.error
    },
    signUpRequest: state => {
      state.signUp.loading = true
      state.signUp.error = ''
    },
    signUpSuccess: (state, data) => {
      state.signUp.loading = false
      state.signUp.error = ''
      state.myAccount.accessToken = data.payload.access_token
    },
    signUpFailure: (state, data) => {
      state.signUp.loading = false
      state.signUp.error = data.payload.error
    },
    fetchProfileRequest: state => {
      state.myAccount.loading = true
      state.myAccount.error = ''
    },
    fetchProfileSuccess: (state, data: PayloadAction<IAccount | undefined>) => {
      state.myAccount.loading = false
      state.myAccount.error = ''
      state.myAccount.data = data.payload
    },
    fetchProfileFailure: (state, data) => {
      state.signUp.loading = false
      state.signUp.error = data.payload.error
    },
    clearMyAccount: state => {
      delete state.myAccount.data
    }
  }
})

export const {
  signInRequest,
  signInSuccess,
  signInFailure,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  fetchProfileRequest,
  fetchProfileSuccess,
  fetchProfileFailure,
  clearMyAccount
} = accountSlice.actions
export default accountSlice.reducer
