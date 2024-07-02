import { useState } from 'react'
import Drawer from '../Drawer'
import Context, { ContextValue } from './SharedContext'

export interface SharedProviderProps {
  children?: React.ReactNode
}

function Provider(props: SharedProviderProps) {
  const { children } = props
  const states = useState<ContextValue>({
    drawer: {},
    modal: {}
  })
  const [state, setState] = states

  return (
    <Context.Provider value={[state, setState]}>
      {children}
      <Drawer {...state.drawer} />
    </Context.Provider>
  )
}

export default Provider
