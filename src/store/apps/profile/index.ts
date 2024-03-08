import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProfileUser, ProfileState } from './types'

const initialState: ProfileState = {
  profile: {
    data: undefined,
    loading: false,
    error: ''
  }
}
const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setDataProfile: (state, data: PayloadAction<IProfileUser>) => {
      state.profile.data = data.payload
    }
  }
})

export const { setDataProfile } = profileSlice.actions
export default profileSlice.reducer
