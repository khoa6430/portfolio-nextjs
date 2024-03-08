import { IAccount, ResetPasswordCredentials, SignInCredentials, SignUpCredentials } from './types'
import { axiosWithTimeout } from 'src/utils/fetchWithTimeout'

export const signInApi = async (values: SignInCredentials) => {
  try {
    const res = await axiosWithTimeout(`/auth/signin`, {
      method: 'POST',
      timeout: 30000,
      body: JSON.stringify(values)
    })

    return res
  } catch (err: any) {
    throw new Error(err?.message || 'There was an error please try again or contact to admin!')
  }
}

export const signUpApi = async (values: SignUpCredentials) => {
  try {
    const res = await axiosWithTimeout(`/auth/signup`, {
      method: 'POST',
      timeout: 30000,
      body: JSON.stringify({
        firstName: values?.firstName,
        lastName: values?.lastName,
        password: values?.password,
        email: values?.email,
        phoneNumber: values?.phoneNumber?.replace(/-/gi, ''),
        corporateName: values.corporateName,
        corporateNumber: values.corporateNumber,
        corporateAddress: values.corporateAddress
      })
    })
    const { data } = res
    return data
  } catch (err: any) {
    throw new Error(err?.message || 'There was an error please try again or contact to admin!')
  }
}

export const getMyProfileApi = async (): Promise<IAccount> => {
  try {
    const res = await axiosWithTimeout(`/users/me`, {
      method: 'GET',
      timeout: 30000
    })

    const { data } = res
    return data
  } catch (err: any) {
    throw new Error(err?.message || 'There was an error please try again or contact to admin!')
  }
}

export const sendEmailVerifyApi = async (email: string) => {
  try {
    const res = await axiosWithTimeout(`/auth/send-mail-verify`, {
      method: 'POST',
      timeout: 30000,
      body: JSON.stringify({ email })
    })
    const { data } = res
    return data?.data
  } catch (err: any) {
    throw new Error(err?.message || 'There was an error please try again or contact to admin!')
  }
}

export const verifyCodeApi = async ({ email, code }: { email: string; code: string }) => {
  try {
    const res = await axiosWithTimeout(`/users/verify`, {
      method: 'PUT',
      timeout: 30000,
      body: JSON.stringify({ email, code })
    })
    const { data } = res
    return data?.data
  } catch (err: any) {
    console.log(err)
    throw new Error(err?.message || 'There was an error please try again or contact to admin!')
  }
}

export const resetPasswordApi = async ({ email }: ResetPasswordCredentials) => {
  try {
    const res = await axiosWithTimeout(`/auth/password/reset/request`, {
      method: 'POST',
      timeout: 30000,
      body: JSON.stringify({ email })
    })
    console.log('res:', res)
    const { data } = res
    return data
  } catch (err: any) {
    console.log('err:', err)
    throw new Error(err?.message || 'There was an error please try again or contact to admin!')
  }
}

// export const createRegisterCompanyApi = async fields => {
//   try {
//     const formData = new FormData()
//     if (fields.certificateImage) {
//       formData.append('certificateImage', fields.certificateImage)
//     }
//     // formData.append("phoneNumber", fields.phoneNumber);
//     formData.append('certificateNumber', fields.certificateNumber)
//     formData.append('companyName', fields.companyName)
//     formData.append('representativeName', fields.representativeName)
//     formData.append('representativeContact', fields.representativeContact)
//     formData.append('location', fields.location)
//     formData.append('introduce', fields.introduce)

//     const res = await axiosWithTimeout(`/users/companies`, {
//       method: 'POST',
//       timeout: 30000,
//       body: formData,
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     })
//     const { data } = res
//     return data?.data
//   } catch (err: any) {
//     throw new Error(err?.message || 'There was an error please try again or contact to admin!')
//   }
// }

// LOGIN KAKAO
// export const loginKakao = async (token: string) => {
//   try {
//     const res = await axiosWithTimeout(`/auth/kakao`, {
//       method: 'POST',
//       timeout: 30000,
//       body: JSON.stringify({ token })
//     })
//     const { data } = res
//     return data?.data
//   } catch (err: any) {
//     throw new Error(err?.message || 'There was an error please try again or contact to admin!')
//   }
// }

// export const verifyPhoneNumberApi = async ({ phone, code }: { phone: string; code: string }) => {
//   try {
//     const res = await axiosWithTimeout(`/auth/user/phone/verify`, {
//       method: 'PATH',
//       timeout: 30000,
//       body: JSON.stringify({ phone, code })
//     })
//     const { data } = res
//     return data?.data
//   } catch (err: any) {
//     console.log(err)
//     throw new Error(err?.message || 'There was an error please try again or contact to admin!')
//   }
// }

// export const sendVerifyPhoneCodeApi = async (phone: string) => {
//   try {
//     const res = await axiosWithTimeout(`/auth/user/phone/verify/code`, {
//       method: 'POST',
//       timeout: 30000,
//       body: JSON.stringify({ phone })
//     })
//     const { data } = res
//     return data?.data
//   } catch (err: any) {
//     throw new Error(err?.message || 'There was an error please try again or contact to admin!')
//   }
// }

export const changePasswordApi = async (payload: { newPassword: string }) => {
  try {
    const res = await axiosWithTimeout(`/users/change-password`, {
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
