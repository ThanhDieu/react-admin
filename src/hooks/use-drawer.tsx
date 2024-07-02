import { DrawerProps } from 'antd'
import { SharedContext } from 'components'
import { useCallback, useContext, useEffect } from 'react'

interface PopupActionType {
  doOpen: (props?: DrawerProps) => void
  doClose: (props?: DrawerProps) => void
}

const useDrawer = (props: DrawerProps) => {
  const [state, setState] = useContext(SharedContext)

  const handleOpenDrawer = useCallback(
    (exProps?: DrawerProps) =>
      setState({
        ...state,
        drawer: {
          ...state.drawer,
          ...props,
          ...exProps,
          open: true
        }
      }),
    [state, setState, props]
  )

  const handleCloseDrawer = useCallback(
    (exProps?: DrawerProps) =>
      setState({
        ...state,
        drawer: {
          ...state.drawer,
          ...props,
          ...exProps,
          open: false
        }
      }),
    [setState, props, state]
  )

  const drawer: DrawerProps & PopupActionType = {
    ...state.drawer,
    doOpen: handleOpenDrawer,
    doClose: handleCloseDrawer
  }

  useEffect(() => {
    setState({
      ...state,
      drawer: {
        ...state.drawer,
        ...props
      }
    })
  }, [setState, props, state])

  return drawer
}

export default useDrawer
