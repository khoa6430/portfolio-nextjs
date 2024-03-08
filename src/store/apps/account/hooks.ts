import { useEffect, useState, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myAccountSelector, useSignInSelector } from './selectors'

// ** Next Import
import { useRouter } from 'next/router'
import { ResetPasswordCredentials, SignInCredentials, SignUpCredentials } from 'src/store/apps/account/types'
import { getMyProfileAction, signInAction, signUpAction } from 'src/store/apps/account/actions'
import { changePasswordApi, resetPasswordApi, signInApi, signUpApi } from 'src/store/apps/account/helpers'
import { clearTokenLocalStorage, setGetToken } from 'src/utils/localstorage'
// ** Third Party Components
import toast from 'react-hot-toast'
import { resetPasswordSignUpApi } from 'src/store/apps/authentication/helpers'
import { useAppDispatch } from '../rootStore'
export const useSignInState = () => {
  return useSelector(useSignInSelector)
}

export const useMyAccountState = () => {
  return useSelector(myAccountSelector)
}

export const useIsLogin = () => {
  return !!useSelector(myAccountSelector)?.data?.id
}

export const useSignInAction = (): [
  (values: SignInCredentials, callbackSuccess?: () => void, callbackFailed?: () => void) => void,
  boolean,
  boolean
] => {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const [isVerifyCode, setVerifyCode] = useState<boolean>(true)
  const called = useRef<boolean>()

  const signIn = useCallback(
    (values: SignInCredentials, callbackSuccess?: () => void, callbackFailed?: () => void) => {
      setLoading(true)
      called.current = true
      signInApi(values)
        .then(result => {
          toast.success('Login success')
          setGetToken(result.headers.authorization || '')
          callbackSuccess?.()
          dispatch(getMyProfileAction({}))
        })
        .catch(e => {
          if (e.message === 'User not been verified') {
            toast.error('Your account not been verified')
            setVerifyCode(false)
            callbackFailed?.()
          } else {
            toast.error(e.message || 'Login failed')
            callbackFailed?.()
          }
        })
        .finally(() => {
          setLoading(false)
          called.current = false
        })
    },
    [called, loading]
  )

  return [signIn, loading, isVerifyCode]
}

export const useSignUpAction = (): {
  signUp: (values: SignUpCredentials) => void
  loading: boolean
  isSuccess: boolean
} => {
  const dispatch = useAppDispatch()
  const called = useRef<boolean>()
  const [loading, setLoading] = useState<boolean>(false)
  const [isSuccess, setSuccess] = useState<boolean>(false)

  const signUp = useCallback(
    (values: SignUpCredentials, callbackSuccess?: (success: boolean) => void) => {
      dispatch(
        signUpAction({
          values,
          cb: (success: boolean) => {
            if (success) {
              called.current = false
              setSuccess(true)
              callbackSuccess?.(success)
            }
          }
        })
      )
    },
    [dispatch, called]
  )

  return { signUp, loading, isSuccess }
}

export const useResetPasswordHook = (): {
  requestResetPassword: (
    values: ResetPasswordCredentials,
    callbackSuccess?: () => void,
    callbackFailed?: () => void
  ) => void
  loading: boolean
  isSuccess: boolean
} => {
  const dispatch = useAppDispatch()
  const called = useRef<boolean>()
  const [loading, setLoading] = useState<boolean>(false)
  const [isSuccess, setSuccess] = useState<boolean>(false)

  const requestResetPassword = useCallback(
    (values: ResetPasswordCredentials, callbackSuccess?: () => void, callbackFailed?: () => void) => {
      resetPasswordApi(values)
        .then(r => {
          toast.success('ResetPassword success')
          callbackSuccess?.()
          setSuccess(true)
          // dispatch(getMyProfileAction({}))
        })
        .catch(e => {
          toast.error(e.message || 'ResetPassword failed')
          callbackFailed?.()
        })
        .finally(() => {
          setLoading(false)
          called.current = false
        })
    },
    [dispatch, called]
  )

  return { requestResetPassword, loading, isSuccess }
}

export const useChangePasswordHook = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const [isSuccess, setSuccess] = useState<boolean>(false)
  const called = useRef<boolean>()

  const changePassword = useCallback(
    (payload: { newPassword: string }) => {
      changePasswordApi(payload)
        .then(({ r }) => {
          toast.success('Change Password success')
          router.push('/apps/home?login=open')
          // dispatch(getMyProfileAction({}))
          setSuccess(true)
        })
        .catch(e => {
          console.log(e.message)
          toast.error(e.message || 'something error')
        })
        .finally(() => setLoading(false))
    },
    [dispatch, called]
  )

  return [changePassword, loading, isSuccess]
}
