import { ReactNode } from 'react'
import { Settings } from 'src/@core/context/settingsContext'

export type Layout = 'vertical' | 'horizontal' | 'blank' | 'blankWithAppBar'

export type Skin = 'default' | 'bordered' | 'semi-dark'

export type ContentWidth = 'full' | 'boxed'

export type AppBar = 'fixed' | 'static' | 'hidden'

export type Footer = 'fixed' | 'static' | 'hidden'

export type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

export type VerticalNavToggle = 'accordion' | 'collapse'

export type HorizontalMenuToggle = 'hover' | 'click'

export type NavLink = {
  id?:string
  icon?: any
  path?: string
  title: string
  action?: string
  subject?: string
  disabled?: boolean
  badgeContent?: string
  externalLink?: boolean
  openInNewTab?: boolean
  isMainPage?: boolean
  isHideDesktop?: boolean
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  children?: (NavGroup | NavLink)[]
}

export type NavGroup = {
  id?:string
  icon?: any
  title: string
  action?: string
  subject?: string
  badgeContent?: string
  isHideDesktop?: boolean
  isMainPage?: boolean
  children?: (NavGroup | NavLink)[]
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}

export type NavSectionTitle = {
  action?: string
  subject?: string
  sectionTitle: string
  isHideDesktop?: boolean
  isMainPage?: boolean
}

export type VerticalNavItemType = NavLink | NavGroup | NavSectionTitle
export type VerticalNavItemsType = (VerticalNavItemType)[]
export type HorizontalNavItemsType = (NavLink | NavGroup)[]

export type LayoutProps = {
  hidden: boolean
  customConfig: any
  settings: Settings
  children: ReactNode
  menuLockedIcon?: ReactNode
  menuUnlockedIcon?: ReactNode
  verticalNavItems?: VerticalNavItemsType
  scrollToTop?: (props?: any) => ReactNode
  saveSettings: (values: Settings) => void
  footerContent?: (props?: any) => ReactNode
  horizontalNavItems?: HorizontalNavItemsType
  verticalAppBarContent?: (props?: any) => ReactNode
  verticalNavMenuContent?: (props?: any) => ReactNode
  verticalNavMenuBranding?: (props?: any) => ReactNode
  horizontalAppBarContent?: (props?: any) => ReactNode
  horizontalAppBarBranding?: (props?: any) => ReactNode
  horizontalNavMenuContent?: (props?: any) => ReactNode
  afterVerticalNavMenuContent?: (props?: any) => ReactNode
  beforeVerticalNavMenuContent?: (props?: any) => ReactNode
}

export type BlankLayoutProps = {
  children: ReactNode
}

export type BlankLayoutWithAppBarProps = {
  children: ReactNode
}
