// ** React Imports
import { ReactNode } from 'react'

// ** Component Imports

// ** Types

interface Props {
  children: ReactNode
  isEmptyData?: boolean
  textEmpty: string
}

const CanViewSectionCustom = (props: Props) => {
  // ** Props
  const { children, isEmptyData } = props
  if (isEmptyData) {
    return <></>
  }
  return <>{children}</>
}

export default CanViewSectionCustom
