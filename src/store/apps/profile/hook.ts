import { useSelector } from 'react-redux'
import { profileUserSelector } from './selectors'

export const useProfileUserState = () => {
  return useSelector(profileUserSelector)
}
