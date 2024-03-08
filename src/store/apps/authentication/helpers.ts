import { axiosWithTimeout } from 'src/utils/fetchWithTimeout'

export const verifyCodeSignUpApi = async ({ code, email }: { code: string; email: string }) => {
  try {
    const res = await axiosWithTimeout(`/auth/signup/verify`, {
      method: 'POST',
      timeout: 30000,
      body: JSON.stringify({ code, email })
    })
    const { data } = res
    return data
  } catch (err: any) {
    throw new Error(err?.message || 'There was an error please try again or contact to admin!')
  }
}

export const resetPasswordSignUpApi = async (payload: { code: string; email: string; newPassword: string }) => {
  try {
    const res = await axiosWithTimeout(`/auth/password/reset`, {
      method: 'POST',
      timeout: 30000,
      body: JSON.stringify(payload)
    })
    const { data } = res
    return data
  } catch (err: any) {
    throw new Error(err?.message || 'There was an error please try again or contact to admin!')
  }
}
