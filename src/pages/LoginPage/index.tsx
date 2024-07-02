import { QrcodeOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import { MainLayout } from 'components'
import withHelmet from 'components/layout/WithHelmet'
import { LoginForm, QrLogin } from './partials'
import { useState } from 'react'

const { Text, Title } = Typography

const LoginPage: React.FC = () => {
  const [openQr, setOpenQr] = useState<boolean>(false)
  return (
    <MainLayout>
      <>
        <div className='text-center'>
          <Title level={2} className='m-0'>
            Welcome back
          </Title>
          <Text type='secondary'>Sign in</Text>
        </div>
        {openQr ? <QrLogin /> : <LoginForm />}
        <Button type='link' onClick={() => setOpenQr(!openQr)} icon={<QrcodeOutlined />}>
          Login with {openQr ? `enter user and password` : `scan qr`}
        </Button>
      </>
    </MainLayout>
  )
}

const Login = withHelmet({ title: 'Yats - Login' }, LoginPage)

export default Login
