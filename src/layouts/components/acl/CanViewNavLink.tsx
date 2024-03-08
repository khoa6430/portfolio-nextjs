// ** React Imports
import { ReactNode, useContext } from 'react'

// ** Component Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

// ** Types
import { NavLink } from 'src/@core/layouts/types'
import { useMediaQuery } from '@mui/material'
import { useTheme, Theme } from '@mui/material/styles'

interface Props {
  navLink?: NavLink
  children: ReactNode
}

const CanViewNavLink = (props: Props) => {
  // ** Hook
  const theme = useTheme()
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  // ** Props
  const { children, navLink } = props

  // ** Hook
  const ability = useContext(AbilityContext)
  return <>{navLink?.isHideDesktop === !isMobile ? '' : children }</>
}

export default CanViewNavLink
