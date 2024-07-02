import { THEME as xTheme } from 'configs'
import { saveTheme } from 'utils'
import { create } from 'zustand'

type State = {
  theme: string

  setTheme: (value: string) => void
}

const useThemeStore = create<State>((set) => ({
  theme: xTheme[0],
  setTheme: (value) => {
    set({
      theme: value
    })
    saveTheme(value)
  }
}))

export default useThemeStore
