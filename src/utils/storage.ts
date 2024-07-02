import { IUserType } from 'services'

const config = {
  prefix: 'YATS',
  accessToken: 'ACCESS_TOKEN',
  refreshToken: 'REFRESH_TOKEN',
  theme: 'THEME',
  profile: 'PROFILE'
} as const
/**
 * Saving data to localStorage.
 */
export const saveToLocalStorage = (name: string, value: unknown) => {
  if (typeof window === 'undefined' || !window.localStorage) return
  localStorage.setItem(`${config.prefix}:${name}`, JSON.stringify(value))
}

/**
 * Load data from localStorage.
 */
export const loadFromLocalStorage = (name: string) => {
  if (typeof window === 'undefined' || !window.localStorage) return null
  const serialized = localStorage.getItem(`${config.prefix}:${name}`)
  if (serialized === null || serialized === undefined) return null
  return JSON.parse(serialized) as string
}

/**
 * Remove data from localStorage.
 */

const removeFromLocalStorage = (name: string) => {
  if (typeof window === 'undefined' || !window.localStorage) return
  localStorage.removeItem(`${config.prefix}:${name}`)
}
export const saveAccessToken = (accessToken: string) => saveToLocalStorage(config.accessToken, accessToken)
export const loadAccessToken = () => loadFromLocalStorage(config.accessToken)
export const clearAccessToken = () => removeFromLocalStorage(config.accessToken)

export const saveRefreshToken = (refeshToken: string) => saveToLocalStorage(config.refreshToken, refeshToken)
export const loadRefreshToken = () => loadFromLocalStorage(config.refreshToken)
export const clearRefreshToken = () => removeFromLocalStorage(config.refreshToken)

export const saveTheme = (theme: string) => saveToLocalStorage(config.theme, theme)
export const loadTheme = () => loadFromLocalStorage(config.theme)
export const clearTheme = () => removeFromLocalStorage(config.theme)

export const saveProfile = (profile: IUserType) => saveToLocalStorage(config.profile, profile)
export const loadProfile = () => loadFromLocalStorage(config.profile)
export const clearProfile = () => removeFromLocalStorage(config.profile)
