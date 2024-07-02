/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConfigProvider } from 'antd'
import { SizeType } from 'antd/es/config-provider/SizeContext'
import { themes } from 'lib'
import { useThemeStore } from 'store'

interface XConfigProviderProps {
  children?: React.ReactNode
}

interface ThemeProps {
  selected: string
  colorPrimary: string
  space?: { size?: number | SizeType }
  direction?: 'ltr' | 'rtl'
  componentSize?: SizeType
  settings?: any
  duration?: number
}

const initialConfigState: ThemeProps = {
  selected: 'default',
  colorPrimary: '#009698',
  space: {
    size: 'middle'
  },
  direction: 'ltr',
  componentSize: 'middle',
  settings: {}
}

const XConfigProvider = (props: XConfigProviderProps) => {
  const xTheme = useThemeStore((state) => state.theme)

  return (
    <ConfigProvider {...initialConfigState} theme={themes[xTheme || initialConfigState.selected]}>
      {props.children}
    </ConfigProvider>
  )
}

export default XConfigProvider
