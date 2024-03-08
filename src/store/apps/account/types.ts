export interface AccountState {
  myAccount: {
    data?: IAccount
    loading: boolean
    error?: string
    accessToken?: string
  }

  signIn: {
    loading: boolean
    error: string
  }

  signUp: {
    loading: boolean
    error: string
  }
}

export interface IAccount {
  id: number
  email: string
  isEmailVerify: boolean
  type: string
  bio: any
  phone: string
  isPhoneVerify: boolean
  firstName: string
  lastName: string
  fullName: string
  address: any
  createdAt: string
  updatedAt: string
  avatar: any
  city: any
  district: any
  ward: any
  corporateName: any
  corporateNumber: any
  corporateAddress: any
}

export interface ProfileImage {
  id: number
  code: string
  url: string
  type: string
  created_at: string
  updated_at: string
  product_id: any
}

export interface SignInCredentials {
  email: string
  password: string
}

export interface SignUpCredentials {
  firstName: string
  lastName: string
  corporateName: string
  corporateNumber: string
  corporateAddress: string
  phoneNumber: string
  email: string
  password: string
  confirmPassword: string
}

export interface ResetPasswordCredentials {
  name?: string
  email?: string
  password?: string
  confirmPassword?: string
  phone?: string
}
