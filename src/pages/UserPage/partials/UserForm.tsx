import { Button, Form, Input, Select, Space } from 'antd'
import React from 'react'
import { IControlForm, useUserForm } from '../hooks'
import CollapsePassword from './CollapsePassword'

const { Option } = Select

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

interface IUserFormProps {
  controlForm?: IControlForm
}

const UserForm: React.FC<IUserFormProps> = ({ controlForm }) => {
  const [form] = Form.useForm()
  const { onFinish, onReset, loading } = useUserForm(form, controlForm)

  return (
    <Form {...layout} form={form} name='control-hooks' onFinish={onFinish} style={{ maxWidth: 600 }}>
      <Form.Item name='username' label='Username' rules={[{ required: true }]}>
        <Input disabled={!!controlForm?.detail} />
      </Form.Item>
      <Form.Item name='name' label='Name' rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name='email' label='Email' rules={[{ required: true }]}>
        <Input type='email' />
      </Form.Item>
      <Form.Item name='gender' label='Gender'>
        <Select allowClear>
          <Option value='male'>male</Option>
          <Option value='female'>female</Option>
          <Option value='other'>other</Option>
        </Select>
      </Form.Item>
      <Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}>
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name='customizeGender' label='Customize Gender' rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item name='address' label='Address'>
        <Input />
      </Form.Item>

      {controlForm?.detail ? <CollapsePassword /> : ''}

      <Form.Item {...tailLayout}>
        <Space>
          <Button
            type='primary'
            htmlType='submit'
            loading={loading.create || loading.update}
            disabled={loading.create || loading.update}
          >
            Submit
          </Button>
          <Button htmlType='button' onClick={onReset}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default UserForm
