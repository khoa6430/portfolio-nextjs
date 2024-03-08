import { ReactNode } from 'react'

export interface ModalTheme {
  background: string
}

export type Handler = () => void

export interface InjectedProps {
  onDismiss?: Handler
}

export interface ModalProps extends InjectedProps {
  title: ReactNode
  description?: string
  hideCloseButton?: boolean
  onBack?: () => void
  onDismiss?: () => void
  children?: any
  bodyStyles?: any
  width?: string
  height?: string
  bodyPadding?: string
  headerBackground?: string
  minWidth?: string
  maxHeight?: string
  hideHeader?: boolean
  hideDivider?: boolean
  paddingHeader?: string
  headerStyle?: any
  style?: any
  maxWidth?: any
  backgroundImage?: string
  overrideCssBtnClose?: boolean
  backgroundColor?: string
}
