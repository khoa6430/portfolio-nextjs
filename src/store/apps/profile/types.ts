export interface ProfileState {
  profile: {
    data?: IProfileUser
    loading: boolean
    error?: string
  }
}

export interface IProfileUser {
  id: number
  isEmailVerify: boolean
  type: string
  bio: any
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
  corporateName: string
  corporateNumber: string
  corporateAddress: string
}
