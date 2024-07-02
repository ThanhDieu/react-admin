import { DesktopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import { paths } from 'configs'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]
function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Dashboard', paths.home, <PieChartOutlined />),
  getItem('Products', 'product-cat', <DesktopOutlined />, [
    getItem('Categories', paths.categories),
    getItem('List', paths.products)
  ]),
  getItem('Users', paths.users, <UserOutlined />)
]

const XMenu = () => {
  const navigate = useNavigate()

  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [selectedMenu, setSelectedMenu] = useState<string[]>()

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (latestOpenKey) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  const handleNavigate = ({ key: path }: { key: React.Key }) => {
    const newPath = path === paths.default ? path : `/${path}`
    navigate(newPath)
  }

  useEffect(() => {
    let pathName = location?.pathname?.slice(1)
    if (!pathName) {
      pathName = paths.home
    }
    setSelectedMenu([pathName])
  }, [location?.pathname])

  return (
    <Menu
      defaultSelectedKeys={[paths.home]}
      mode='inline'
      onClick={handleNavigate}
      items={items}
      className='!border-0'
      openKeys={openKeys}
      selectedKeys={selectedMenu}
      onOpenChange={onOpenChange}
    />
  )
}

export default XMenu
