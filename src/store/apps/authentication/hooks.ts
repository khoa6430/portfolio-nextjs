import { useCallback, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { resetPasswordSignUpApi, verifyCodeSignUpApi } from 'src/store/apps/authentication/helpers'
import toast from 'react-hot-toast'
import { clearTokenLocalStorage, setGetToken } from 'src/utils/localstorage'
import { getMyProfileAction } from 'src/store/apps/account/actions'
import { sendEmailVerifyApi } from 'src/store/apps/account/helpers'
import { useAppDispatch } from '../rootStore'

export const useAuthSignUpAction = (): [({ code, email }: { code: string; email: string }) => void, boolean] => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState<boolean>(true)
  const called = useRef<boolean>()

  const verifyCodeSignUp = useCallback(
    ({ code, email }: { code: string; email: string }) => {
      verifyCodeSignUpApi({ code, email })
        .then(({ access_token }) => {
          setGetToken(access_token)
          toast.success('Verify Code success')
          router.push('/apps/home')
          dispatch(getMyProfileAction({}))
        })
        .catch(e => {
          toast.error(e.message || 'something error')
        })
        .finally(() => setLoading(false))
    },
    [dispatch, called]
  )

  return [verifyCodeSignUp, loading]
}

export const useResetPasswordHook = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const [isSuccess, setSuccess] = useState<boolean>(false)
  const called = useRef<boolean>()

  const resetPassword = useCallback(
    (payload: { code: string; email: string; newPassword: string }) => {
      resetPasswordSignUpApi(payload)
        .then(({ r }) => {
          clearTokenLocalStorage()
          toast.success('Reset Password success')
          router.push('/apps/home?login=open')
          dispatch(getMyProfileAction({}))
          setSuccess(true)
        })
        .catch(e => {
          toast.error(e.message || 'something error')
        })
        .finally(() => setLoading(false))
    },
    [dispatch, called]
  )

  return [resetPassword, loading, isSuccess]
}

export const useRequestSendEmailVerifyApiHook = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const [isSuccess, setSuccess] = useState<boolean>(false)
  const called = useRef<boolean>()

  const requestSendEmailVerify = useCallback(
    (payload: { email: string }) => {
      sendEmailVerifyApi(payload.email)
        .then(() => {
          clearTokenLocalStorage()
          setSuccess(true)
          toast.success('Send mail success')
        })
        .catch(e => {
          toast.error(e.message || 'something error')
        })
        .finally(() => setLoading(false))
    },
    [dispatch, called]
  )

  return [requestSendEmailVerify, loading, isSuccess]
}
