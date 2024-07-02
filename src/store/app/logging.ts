import { ILoggingType, loggingService } from 'services'
import { ILoading } from 'types'
import { fitResponseModel } from 'utils'
import { create } from 'zustand'

type State = {
  logs: ILoggingType[] | null
  loading: ILoading
  error: string | null
  getLogs: () => Promise<ILoggingType[] | null>
  createLog: (event: ILoggingType) => Promise<ILoggingType | null>
}

const useLoggingStore = create<State>((set, get) => ({
  logs: null,
  loading: {
    list: false,
    create: false
  },
  error: null,
  getLogs: async () => {
    set({ loading: { ...get().loading, list: true }, error: null })
    const response = await loggingService.getLogs()
    if (response?.data) {
      const newResponse = fitResponseModel<ILoggingType>(response.data).sort(
        (a, b) => Number(a.createdAt) && Number(b.createdAt) && Number(b.createdAt) - Number(a.createdAt)
      )
      set({ logs: newResponse, loading: { ...get().loading, list: false }, error: null })
      return newResponse
    }

    set({ loading: { ...get().loading, list: false }, error: 'Failed to fetch event data' })
    return null
  },
  createLog: async (form: ILoggingType) => {
    set({ loading: { ...get().loading, create: true }, error: null })

    const detail = await loggingService.createLog(form)
    if (detail) {
      await get().getLogs()
      set({ loading: { ...get().loading, create: false }, error: null })
      return detail.data
    }

    set({ loading: { ...get().loading, create: false }, error: 'Failed to fetch event data' })
    return null
  }
}))

export default useLoggingStore
