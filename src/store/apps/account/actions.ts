import toast from 'react-hot-toast'

import { createAsyncThunk } from '@reduxjs/toolkit'

import {
  signInFailure,
  signInRequest,
  signInSuccess,
  signUpFailure,
  signUpRequest,
  signUpSuccess,
  fetchProfileRequest,
  fetchProfileSuccess
} from '.'
import { getMyProfileApi, signInApi, signUpApi } from './helpers'
import { IAccount, SignInCredentials, SignUpCredentials } from './types'
import { setGetToken } from 'src/utils/localstorage'
import { RootState } from 'src/store/apps/rootStore'

export const signInAction = createAsyncThunk<
  void,
  { values: SignInCredentials; callbackSuccess: () => void; callbackFailed: () => void },
  { state: RootState }
>('/auth/login', async (payload, thunkAPI) => {
  const { values, callbackSuccess = () => {}, callbackFailed = () => {} } = payload
  try {
    thunkAPI.dispatch(signInRequest())
    const data = await signInApi(values)
    thunkAPI.dispatch(
      signInSuccess({
        accessToken: data.data.access_token
      })
    )
    setGetToken(data.data.access_token)
    await toast.success('Login success')
    callbackSuccess()
  } catch (e: any) {
    toast.error(e.message || 'Login failed')
    thunkAPI.dispatch(signInFailure({ error: e.message }))
    callbackFailed()
  }
})

export const signUpAction = createAsyncThunk<
  void,
  { values: SignUpCredentials; cb?: (success: boolean) => void },
  {
    state: RootState
  }
>('account/sign-up', async (payload, thunkAPI) => {
  const { cb = (success: boolean) => {} } = payload
  try {
    thunkAPI.dispatch(signUpRequest())
    const response = await signUpApi(payload.values)
    console.log('response:', response)
    if (response) {
      thunkAPI.dispatch(signUpSuccess({}))
      cb(true)
    }
  } catch (e: any) {
    toast.error(e.message)
    thunkAPI.dispatch(signUpFailure({ error: e.message }))
    cb(false)
  }
})

export const signOutAction = createAsyncThunk<
  void,
  { values?: any; cb?: (success: boolean) => void },
  {
    state: RootState
  }
>('account/sign-out', async (payload, thunkAPI) => {})

export const getMyProfileAction = createAsyncThunk<
  void,
  { cb?: (success?: boolean) => void },
  {
    state: RootState
  }
>('profile', async (payload, thunkAPI) => {
  try {
    thunkAPI.dispatch(fetchProfileRequest())
    const data = await getMyProfileApi()
    thunkAPI.dispatch(fetchProfileSuccess(data))
  } catch (e: any) {
    console.log(e)
  }
})
