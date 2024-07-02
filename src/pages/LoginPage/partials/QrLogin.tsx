/* eslint-disable @typescript-eslint/no-explicit-any */

import { Spin } from 'antd'
import React from 'react'
import { QrReader } from 'react-qr-reader'
import { useLogin } from '../hooks'

interface IQrLoginProps {}
const QrLogin: React.FC<IQrLoginProps> = () => {
  const { onLogin: handleLogin, isLoading } = useLogin()

  return (
    <Spin spinning={isLoading}>
      <QrReader
        className='border'
        constraints={{ facingMode: 'user' }}
        onResult={(result: any) => {
          if (result) {
            const value = JSON.parse(result?.text)
            handleLogin(value)
          }
        }}
      />
    </Spin>
  )
}

export default QrLogin
