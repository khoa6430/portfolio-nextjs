import axios from 'axios'
import { IProfileUser } from './types'
import { axiosWithTimeout } from 'src/utils/fetchWithTimeout'
import { API_URL } from 'src/configs/endpoints'

export const getProfileDetailApi = async (id: string): Promise<IProfileUser | undefined> => {
  try {
    const res = await axios.get(`${API_URL}/users/${id}`)

    return res.data
  } catch (err: any) {
    return undefined
    throw new Error(err.message || 'There was an error please try again or contact to admin!')
  }
}
