/* eslint-disable @typescript-eslint/no-explicit-any */
import { DrawerProps, ModalProps } from 'antd'
import * as React from 'react'

export interface ContextValue {
  drawer: DrawerProps
  modal: ModalProps
}

export type SharedContextValueType = [ContextValue, React.Dispatch<React.SetStateAction<ContextValue>>]

const Context = React.createContext<SharedContextValueType>(null as any)

export default Context
