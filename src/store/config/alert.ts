import { NotificationPlacement } from 'antd/es/notification/interface'
import { create } from 'zustand'
type StatusType = 'error' | 'info' | 'warn' | 'success'
interface IAlertType {
  status?: StatusType
  message: string
  logs?: [StatusType, string][]
  placement?: NotificationPlacement
  duration?: number
}

const initialState: IAlertType = {
  status: 'info',
  message: '',
  logs: [],
  placement: 'top',
  duration: 3
}

type State = {
  alert: IAlertType
  setAlert: (value: IAlertType) => void
  resetAlert: () => void
}

const useAlertStore = create<State>((set) => ({
  alert: initialState,
  setAlert: (value) => {
    set({
      alert: value
    })
  },
  resetAlert: () => {
    set({ alert: initialState })
  }
}))

export default useAlertStore
