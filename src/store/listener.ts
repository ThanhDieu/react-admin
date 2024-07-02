import { message } from 'antd'
import useAuthStore from './app/auth'
import useLoggingStore from './app/logging'
import useUserStore from './app/user'

const userListener = useUserStore.subscribe((user) => {
  if (user?.error) message.error(user.error)
})
const authListener = useAuthStore.subscribe((auth) => {
  if (auth?.error) message.error(auth.error)
})
const loggingListener = useLoggingStore.subscribe((login) => {
  if (login?.error) message.error(login.error)
})

const cleanup = () => {
  userListener()
  authListener()
  loggingListener()
}

export { cleanup }
