import { BaseOuterLayout } from 'components'
import withHelmet from 'components/layout/WithHelmet'
import { Dashboard } from './partials'

const HomePage = () => {
  return (
    <BaseOuterLayout>
      <Dashboard />
    </BaseOuterLayout>
  )
}
const Home = withHelmet({ title: 'Yats' }, HomePage)

export default Home
