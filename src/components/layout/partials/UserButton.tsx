/* eslint-disable @typescript-eslint/no-explicit-any */
import { InfoCircleOutlined, LogoutOutlined, ProfileOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Divider, Menu as MenuAntd, Popover, Space, Typography } from 'antd'
import { MenuItemType } from 'antd/es/menu/hooks/useItems'
import { DATE_TIME_FORMAT_2, TIME_FORMAT_3, paths } from 'configs'
import dayjs from 'dayjs'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from 'store'
import { capitalize } from 'utils'
import('dayjs/locale/de')

const { Text } = Typography

function UserButton() {
  const navigate = useNavigate()
  const { detail: profile, logout } = useAuthStore()
  const [open, setOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(dayjs())

  const handleLogout = () => {
    logout()
    navigate(`/${paths.login}`)
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }

  const menuItems: MenuItemType[] = useMemo(
    () => [
      {
        key: 'profile',
        label: 'Profile',
        icon: <ProfileOutlined />
      },
      {
        key: 'setting',
        label: 'Settings',
        icon: <SettingOutlined />
      },
      {
        key: 'help',
        label: 'Help',
        icon: <InfoCircleOutlined />
      },
      {
        key: 'logout',
        label: 'Log out',
        icon: <LogoutOutlined />,
        onClick: handleLogout
      }
    ],
    [handleLogout]
  )

  // LIFE
  useEffect(() => {
    let interval: any
    if (open) {
      interval = setInterval(() => {
        setCurrentTime(dayjs())
      }, 1000)
    }

    // Xóa interval khi open chuyển sang false
    return () => {
      clearInterval(interval)
    }
  }, [open, currentTime])

  const RenderTime = () => {
    return (
      <Space direction='vertical' size='small'>
        <Typography.Text>Browser</Typography.Text>
        <Space size='small' align='center'>
          <Typography.Title level={3} className='mb-0'>
            {dayjs(currentTime).format(TIME_FORMAT_3)}
          </Typography.Title>
          <Typography.Text>{dayjs().format('Z')}</Typography.Text>
        </Space>

        <Typography.Text>{dayjs(currentTime).format(DATE_TIME_FORMAT_2)}</Typography.Text>
      </Space>
    )
  }

  return (
    <Popover
      placement='bottomRight'
      title={capitalize(profile?.name || profile?.username || '')}
      content={
        <>
          <Space direction='vertical' size='small'>
            {profile?.email && <Typography.Text>{profile.email}</Typography.Text>}
          </Space>
          <Divider className='my-3 ' />
          <RenderTime />
          <Divider className='my-3 ' />

          <MenuAntd items={menuItems} className='!border-0' />
        </>
      }
      trigger='click'
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button type='text' className='h-[45px] px-2'>
        <Avatar icon={<UserOutlined size={24} className='text-[16px]' />} />
        <Text className='ps-3'>{profile?.username}</Text>
      </Button>
    </Popover>
  )
}

export default UserButton
