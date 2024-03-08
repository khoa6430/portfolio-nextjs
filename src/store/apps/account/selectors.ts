import { createSelector } from '@reduxjs/toolkit'
import { State } from 'src/store/apps/types'

export const myAccountSelector = createSelector(
  (state: State) => state.account.myAccount,
  (account) => {
    return account
  },
)

export const useSignInSelector = createSelector(
    (state: State) => state.account.signIn,
    (account) => {
        return account
    },
)
