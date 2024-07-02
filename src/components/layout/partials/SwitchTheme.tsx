import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { THEME } from 'configs'
import { useEffect } from 'react'
import { useThemeStore } from 'store'
import { loadTheme } from 'utils'

const SwitchTheme = () => {
  const initTheme = loadTheme()
  const setTheme = useThemeStore((state) => state.setTheme)
  const xTheme = useThemeStore((state) => state.theme)

  const handleChangeTheme = (value: boolean) => {
    const newValue = value ? THEME[0] : THEME[1]
    setTheme(newValue)
  }
  useEffect(() => {
    setTheme(initTheme || THEME[0])
  }, [initTheme, setTheme])

  return (
    <div className='flex items-center gap-3 '>
      <Button
        className=''
        onClick={() => handleChangeTheme(xTheme === THEME[0] ? false : true)}
        shape='circle'
        icon={xTheme === THEME[0] ? <SunOutlined /> : <MoonOutlined />}
      />
    </div>
  )
}

export default SwitchTheme
