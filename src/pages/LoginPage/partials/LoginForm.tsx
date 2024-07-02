import { Button, Form, Input, Typography } from 'antd'
import { useLogin } from '../hooks'

const LoginForm = () => {
  const { onLogin: handleLogin, isLoading } = useLogin()

  return (
    <Form layout='vertical' name='normal_login' className='login-form flex flex-col' onFinish={handleLogin}>
      <div className='login-form flex flex-col'>
        <Form.Item
          label={<Typography.Text type='secondary'>Username</Typography.Text>}
          name='username'
          rules={[
            {
              required: true,
              message: 'Username is required!'
            }
          ]}
        >
          <Input placeholder='Enter your username' className='py-3' />
        </Form.Item>
        <Form.Item
          label={<Typography.Text type='secondary'>Password</Typography.Text>}
          name='password'
          rules={[
            {
              required: true,
              message: 'Invalid password!'
            }
          ]}
        >
          <Input.Password type='password' placeholder='••••••••••' className='py-3' />
        </Form.Item>
      </div>

      <Form.Item>
        <Button type='primary' htmlType='submit' className='min-h-[3rem] w-full' disabled={isLoading}>
          Sign in
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
