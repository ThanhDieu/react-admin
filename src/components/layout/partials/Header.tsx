import { Flex, Layout, Typography, theme } from 'antd'
import SwitchTheme from './SwitchTheme'
import UserButton from './UserButton'
const { Header } = Layout

interface IHeaderProps {
  children?: React.ReactElement
  headerPage?: React.HTMLAttributes<HTMLElement>
}

const XHeader: React.FC<IHeaderProps> = ({ children, headerPage }) => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Header
      className='!p-3 flex items-center flex justify-between'
      style={{ padding: 0, background: colorBgContainer }}
    >
      <Typography.Title className='!text-[24px] !m-0'>{headerPage?.title}</Typography.Title>
      <Flex>
        <SwitchTheme />
        <UserButton />
        {children}
      </Flex>
    </Header>
  )
}

export default XHeader
