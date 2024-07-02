import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { ILoginFormProps } from 'services'
import { useAuthStore, useLoggingStore } from 'store'

const useLogin = () => {
  const { login, loading } = useAuthStore()
  const addEvent = useLoggingStore((state) => state.createLog)
  const navigate = useNavigate()

  const handleLogin = async (value: ILoginFormProps) => {
    const res = await login(value)

    if (res) {
      addEvent({
        message: '',
        event: 'logged in',
        createdAt: dayjs().unix()
      })
      navigate('/')
    }
  }

  return {
    onLogin: handleLogin,
    isLoading: loading
  } as const
}

export { useLogin }
