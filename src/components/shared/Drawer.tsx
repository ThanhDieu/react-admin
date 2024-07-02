import { Drawer as AntdDrawer, DrawerProps } from 'antd'
import { SharedContext } from 'components'
import { useContext } from 'react'

const Drawer: React.FC<DrawerProps> = (props) => {
  const [state, setState] = useContext(SharedContext)

  const handleClose: DrawerProps['onClose'] = (e) => {
    props.onClose && props.onClose(e)
    setState({
      ...state,
      drawer: {
        ...state.drawer,
        open: false
      }
    })
  }

  return <AntdDrawer {...props} open={state.drawer.open} onClose={handleClose} />
}

export default Drawer
