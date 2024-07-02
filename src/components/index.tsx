// wrapper
export { default as ConfigProvider } from './wrapper/ConfigProvider'
export { default as MobileDetectorProvider } from './wrapper/MobileDetectorProvider'

//layout
export { default as AppLayout } from './layout/AppLayout'
export { default as BaseListLayout } from './layout/ChildLayout/BaseListLayout'
export { default as BaseOuterLayout } from './layout/ChildLayout/BaseOuterLayout'
export { default as MainLayout } from './layout/MainLayout'
export { default as Footer } from './layout/partials/Footer'
export { default as Header } from './layout/partials/Header'
export { default as Menu } from './layout/partials/Menu'
export { default as SwitchTheme } from './layout/partials/SwitchTheme'

//shared
export { default as Drawer } from './shared/Drawer'
export { default as ErrorPage } from './shared/ErrorPage'
export { default as SharedContext } from './shared/SharedProvider/SharedContext'
export { default as SharedProvider } from './shared/SharedProvider/SharedProvider'

//common
export { default as ActionTable } from './common/ActionTableComponent'
export { default as SearchInput } from './common/SearchComponent'
export { default as Password } from './common/PasswordFormItem'

//router
export { default as AuthProtected } from './router/AuthProtected'
export { default as router } from './router/router'
