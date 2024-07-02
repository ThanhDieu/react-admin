import { paths } from 'configs'
import { useAsync } from 'hooks'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from 'store'

interface IAuthProtectedProps {
  children?: React.ReactElement
}

const AuthProtected: React.FC<IAuthProtectedProps> = ({ children }) => {
  const navigate = useNavigate()
  const { run } = useAsync()
  const { getDetail } = useAuthStore()

  useEffect(() => {
    run(getDetail()).then((res) => !res && navigate(`/${paths.login}`))
  }, [run, getDetail, navigate])

  return children
}

export default AuthProtected
