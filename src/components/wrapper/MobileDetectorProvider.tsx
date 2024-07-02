import { CloseCircleOutlined } from '@ant-design/icons'
import { Typography, notification, theme } from 'antd'
import { useAppSize } from 'hooks'
import { useEffect } from 'react'
import { useAlertStore } from 'store'

const { useToken } = theme
interface MobileDetectorProviderProps {
  children?: React.ReactNode
}

export default function MobileDetectorProvider({ children }: MobileDetectorProviderProps) {
  const { token } = useToken()
  const { innerAppWidth } = useAppSize()
  const { alert } = useAlertStore()
  const [api, contextHolder] = notification.useNotification()

  const notificationOptions = {
    error: api.error,
    warn: api.warning,
    info: api.info,
    success: api.success
  }

  useEffect(() => {
    if (alert?.message && alert.status) {
      notificationOptions[alert.status]({
        message: alert.message,
        duration: alert.duration,
        placement: alert.placement
      })
    }
  }, [alert])

  return innerAppWidth <= 450 ? (
    <div
      className='pt-4 pb-6 flex flex-col items-center justify-center h-[100vh]'
      style={{ backgroundColor: token.colorBgContainer }}
    >
      <CloseCircleOutlined className='mb-4 text-[60px] text-[#ff4d4f]' />
      <Typography.Title level={4}>Mobile devices are not supported</Typography.Title>
      <Typography.Text>Try again with a larger device</Typography.Text>
    </div>
  ) : (
    <>
      {contextHolder}
      {children}
    </>
  )
}
