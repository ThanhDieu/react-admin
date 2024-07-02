import { AppLayout } from 'components'
import { paths } from 'configs'
import { HomePage, LoadingPage, LoginPage, NotFoundPage, UserPage } from 'pages'
import { Suspense } from 'react'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import AuthProtected from './AuthProtected'

const withSuspense = (Component: React.ComponentType) => {
  const SuspenseComponent: React.ComponentType = () => (
    <Suspense fallback={<LoadingPage />}>
      <Component />
    </Suspense>
  )
  return SuspenseComponent
}

const router = createBrowserRouter([
  {
    path: paths.default,
    Component: withSuspense(() => (
      <AuthProtected>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </AuthProtected>
    )),
    children: [
      {
        index: true,
        Component: withSuspense(HomePage)
      },
      {
        path: paths.home,
        Component: withSuspense(HomePage)
      },
      {
        path: paths.users,
        Component: withSuspense(UserPage)
      }
    ]
  },
  {
    path: paths.login,
    Component: withSuspense(LoginPage)
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])

export default router
