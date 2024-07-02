import { ConfigProvider, MobileDetectorProvider, SharedProvider, router } from 'components'
import { LoadingPage } from 'pages'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <MobileDetectorProvider>
        <SharedProvider>
          <Suspense fallback={<LoadingPage />}>
            <RouterProvider router={router} />
          </Suspense>
        </SharedProvider>
      </MobileDetectorProvider>
    </ConfigProvider>
  )
}

export default App
