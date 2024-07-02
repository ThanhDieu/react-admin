import { Image, Layout, Space, theme } from 'antd'
import { Footer } from 'components'
import { tw } from 'twind'
import Logo from '/logo.svg'

const { Content } = Layout
const { useToken } = theme

export interface IMainLayoutProps {
  children?: React.ReactElement
}
const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  const { token } = useToken()
  return (
    <Layout className='h-screen py-8 px-8' style={{ backgroundColor: token.colorBgLayout }}>
      <Content className='flex items-center w-full justify-center'>
        <Space direction='vertical' className='gap-8 w-[30%] min-w-[413px]'>
          <div className='text-center'>
            <Image height={56} src={Logo} preview={false} />
          </div>
          <div className={tw`flex flex-col gap-8 rounded-[10px] px-8 py-6 bg-[${token.colorBgContainer}]`}>
            {children}
          </div>
        </Space>
      </Content>
      <Footer />
    </Layout>
  )
}

export default MainLayout
