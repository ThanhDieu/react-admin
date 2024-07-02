import { Form, Input } from 'antd'
import { EFuncType } from 'configs'

interface IPasswordFormItemProps {
  type?: EFuncType.CREATE | EFuncType.UPDATE
  isShow?: boolean
}
const PasswordFormItem: React.FC<IPasswordFormItemProps> = ({ type, isShow }) => {
  return isShow ? (
    <>
      {type === EFuncType.UPDATE && (
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please enter password!'
            }
          ]}
          label='Your Password'
          name='password'
        >
          <Input.Password allowClear placeholder='Your password' />
        </Form.Item>
      )}
      <Form.Item
        label='New Password'
        name='new_password'
        rules={[
          {
            required: true,
            message: 'Please enter new password!'
          }
        ]}
      >
        <Input.Password placeholder='New password' allowClear />
      </Form.Item>
      <Form.Item
        label='Confirm new Password'
        name='confirm_password'
        dependencies={['new_password']}
        rules={[
          {
            required: true,
            message: 'Please confirm your password!'
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('new_password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'))
            }
          })
        ]}
      >
        <Input.Password placeholder='Confirm new password' allowClear />
      </Form.Item>
    </>
  ) : (
    ''
  )
}

export default PasswordFormItem
