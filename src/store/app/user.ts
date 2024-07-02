import { IUserType, userService } from 'services'
import { BaseResponseAPI, ILoading } from 'types'
import { fitResponseModel } from 'utils/fitResponseModel'
import { create } from 'zustand'

type State = {
  users: IUserType[] | null
  user: IUserType | null
  count: number
  loading: ILoading
  error: string | null
  getUsers: () => Promise<IUserType[] | null>
  getUser: (id: string) => Promise<IUserType | null>
  deleteUser: (id: string) => Promise<IUserType>
  updateUser: (form: IUserType) => Promise<IUserType>
  createUser: (form: IUserType) => Promise<BaseResponseAPI<IUserType>>
}

const useUserStore = create<State>((set, get) => ({
  user: null,
  users: null,
  count: 0,
  loading: {
    list: false,
    detail: false,
    create: false,
    update: false,
    delete: false
  },
  error: null,
  getUsers: async () => {
    set({ loading: { ...get().loading, list: true }, error: null, count: 0 })
    const response = await userService.getUsers()
    if (response?.data) {
      const newResponse = fitResponseModel<IUserType>(response.data).sort(
        (a, b) => Number(a.createdAt) && Number(b.createdAt) && Number(b.createdAt) - Number(a.createdAt)
      )

      set({ users: newResponse, loading: { ...get().loading, list: false }, error: null, count: newResponse?.length })
      return newResponse
    }
    set({ users: null, loading: { ...get().loading, list: false }, error: 'Failed to fetch user data' })
    return null
  },
  getUser: async (id: string) => {
    set({ loading: { ...get().loading, detail: true }, error: null })
    const detail = (await get().users?.find((item) => item.id === id)) || null
    set({ loading: { ...get().loading, detail: false } })
    return detail
  },
  createUser: async (form: IUserType) => {
    set({ loading: { ...get().loading, create: true }, error: null })
    const users = get().users
    const checkUsername = users ? users.findIndex((item) => item?.username === form.username) : -1
    if (checkUsername > -1) {
      set({ loading: { ...get().loading, create: false }, error: 'Username already exists' })
      return null
    }
    const detail = await userService.createUser(form)
    await get().getUsers()

    set({ loading: { ...get().loading, create: false }, error: null })
    return detail?.data
  },
  updateUser: async (form: IUserType) => {
    set({ loading: { ...get().loading, update: true }, error: null })
    if (form.id) {
      const user = await get().getUser(form.id)
      if (form.password) {
        if (form.password === user?.password) {
          form.password = form.new_password
          delete form.new_password
          delete form.confirm_password
        } else {
          set({ loading: { ...get().loading, update: false }, error: 'Password invalid' })
          return null
        }
      }
      const detail = await userService.updateUser({ ...user, ...form })
      await get().getUsers()

      set({ loading: { ...get().loading, update: false }, error: null })
      return detail?.data
    }
  },
  deleteUser: async (id: string) => {
    set({ loading: { ...get().loading, delete: true }, error: null })
    const detail = await userService.deleteUser(id)
    const list = get().users?.filter((item) => item.id !== id)

    set({ loading: { ...get().loading, delete: false }, users: list })
    return detail?.data
  }
}))

export default useUserStore
