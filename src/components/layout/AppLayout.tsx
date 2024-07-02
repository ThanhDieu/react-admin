import { Image, Layout, theme } from 'antd'
import { Menu } from 'components'
import React, { useState } from 'react'

import { THEME } from 'configs'
import { useThemeStore } from 'store'
import { tw } from 'twind'
import Logo from '/logo.svg'
import LogoDark from '/logo/logo-no-background-black.svg'

const { Sider } = Layout

interface IAppLayoutProps {
  children?: React.ReactElement
  headerPage?: React.HTMLAttributes<HTMLElement>
}
const App: React.FC<IAppLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const xTheme = useThemeStore((state) => state.theme)

  return (
    <Layout className='min-h-[100vh]'>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className={tw`!bg-[${colorBgContainer}]`}
      >
        <div className='text-center p-3'>
          <Image height={50} src={xTheme === THEME[0] ? Logo : LogoDark} preview={false} />
        </div>
        <Menu />
      </Sider>
      {children}
    </Layout>
  )
}

export default App
