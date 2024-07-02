/* eslint-disable @typescript-eslint/no-explicit-any */

import { ILoginFormProps, IUserType, userService } from 'services'
import { clearProfile, fitResponseModel, loadProfile, saveProfile } from 'utils'
import { create } from 'zustand'

type State = {
  detail: IUserType | null
  loading: boolean
  error: string | null
  login: (form: ILoginFormProps) => Promise<IUserType | null>
  logout: () => void
  getDetail: () => Promise<IUserType>
}

const useAuthStore = create<State>((set) => ({
  detail: null,
  loading: false,
  error: null,
  getDetail: async () => {
    set({ loading: true, error: null })
    try {
      const info: any = await loadProfile()
      if (!info?.id) {
        set({ detail: null, loading: false, error: null })
        return null
      }
      const response = await userService.getUser(info.id)
      if (!response?.data) {
        set({ detail: null, loading: false, error: 'Failed to fetch user data' })
        return null
      }
      set({ detail: info, loading: false, error: null })
      return info
    } catch (error) {
      set({ detail: null, loading: false, error: 'Error fetching user data' })
      return null
    }
  },
  login: async (form) => {
    set({ loading: true, error: null })
    try {
      const response = await userService.getUsers()
      const newResponse = fitResponseModel<IUserType>(response?.data)
      const checkLogin = newResponse
        ? newResponse.findIndex(
            (item) => item?.username === form.username
            //  && item.password === form.password
          )
        : -1
      if (newResponse && checkLogin > -1) {
        set({ detail: newResponse[checkLogin], loading: false, error: null })
        saveProfile(newResponse[checkLogin])
        return newResponse[checkLogin]
      }
      set({ error: 'Invalid username or password', loading: false })
      return null
    } catch (error: any) {
      set({ error: error.message, loading: false })
      return null
    }
  },
  logout: async () => {
    clearProfile()
  }
}))

export default useAuthStore
