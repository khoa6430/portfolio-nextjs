import { createSelector } from '@reduxjs/toolkit'
import { State } from 'src/store/apps/types'

export const profileUserSelector = createSelector(
  (state: State) => state.profile.profile,
  profile => {
    return profile
  }
)
