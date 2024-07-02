import { ErrorPage } from 'components'

const NotFoundPage = () => {
  return <ErrorPage status='404' title='404' subTitle='Sorry, the page you visited does not exist.' />
}

export default NotFoundPage
