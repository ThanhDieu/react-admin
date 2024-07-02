import { Layout, theme } from 'antd'
import { Footer, Header } from 'components'
import { useAppSize } from 'hooks'
import { tw } from 'twind'

const { Content } = Layout

interface IBaseOuterProps {
  children?: React.ReactElement
  headerPage?: React.HTMLAttributes<HTMLElement>
}
const BaseOuterLayout: React.FC<IBaseOuterProps> = ({ headerPage, children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  const { innerAppHeight } = useAppSize()
  console.log(innerAppHeight)
  return (
    <Layout>
      <Header headerPage={headerPage} />
      <Content className={tw(`m-3 h-full`)}>
        <div
          className={tw`h-full p-3 bg-[${colorBgContainer}] rounded-[${borderRadiusLG}px] overflow-auto h-[${innerAppHeight}px]`}
        >
          <div className='overflow-x-hidden overflow-y-auto'>{children}</div>
        </div>
      </Content>
      <Footer />
    </Layout>
  )
}

export default BaseOuterLayout
