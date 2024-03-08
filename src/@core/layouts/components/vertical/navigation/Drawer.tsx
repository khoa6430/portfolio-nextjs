// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { styled, useTheme } from '@mui/material/styles'
import MuiSwipeableDrawer, { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { useScrollTrigger } from '@mui/material'

interface Props {
  hidden: boolean
  navWidth: number
  navHover: boolean
  settings: Settings
  navVisible: boolean
  children: ReactNode
  collapsedNavWidth: number
  navigationBorderWidth: number
  setNavHover: (values: boolean) => void
  setNavVisible: (value: boolean) => void
}

const SwipeableDrawer = styled(MuiSwipeableDrawer)<SwipeableDrawerProps>({
  overflowX: 'hidden',
  transition: 'width .25s ease-in-out',
  // transform: 'translateX(90px)',
  '& ul': {
    listStyle: 'none'
  },
  '& .MuiListItem-gutters': {
    paddingLeft: 4,
    paddingRight: 4
  },
  '& .MuiDrawer-paper': {
    left: 'unset',
    right: 0,
    overflowX: 'hidden',
    transition: 'width .25s ease-in-out, box-shadow .25s ease-in-out',
    backgroundColor: '#ffff'
  }
})

const Drawer = (props: Props) => {
  // ** Props
  const {
    hidden,
    children,
    navHover,
    navWidth,
    settings,
    navVisible,
    setNavHover,
    setNavVisible,
    collapsedNavWidth,
    navigationBorderWidth
  } = props

  // ** Hook
  const theme = useTheme()

  // ** Vars
  const { skin, navCollapsed, appBarBlur } = settings
  const scrollTrigger = useScrollTrigger({ threshold: 0, disableHysteresis: true })

  const drawerColor = () => {
    if (skin === 'semi-dark' && theme.palette.mode === 'light') {
      return {
        '& .MuiTypography-root': {
          color: `rgba(${theme.palette.customColors.dark}, 0.87)`
        }
      }
    } else if (skin === 'semi-dark' && theme.palette.mode === 'dark') {
      return {
        '& .MuiTypography-root': {
          color: `rgba(${theme.palette.customColors.light}, 0.87)`
        }
      }
    } else return {}
  }

  const drawerBgColor = () => {
    if (skin === 'semi-dark' && theme.palette.mode === 'light') {
      return {
        backgroundColor: theme.palette.customColors.darkBg
      }
    } else if (skin === 'semi-dark' && theme.palette.mode === 'dark') {
      return {
        backgroundColor: '#30334E'
      }
    } else {
      return {
        ...(appBarBlur && { backdropFilter: 'blur(8px)' }),
        backgroundColor: hexToRGBA(theme.palette.background.paper, appBarBlur ? 0.9 : 1)

        // backgroundColor:
        //   theme.palette.mode === 'light' ? 'theme.palette.background.default' : theme.palette.customColors.darkBg
      }
    }
  }

  // Drawer Props for Mobile & Tablet screens
  const MobileDrawerProps = {
    open: navVisible,
    onOpen: () => setNavVisible(true),
    onClose: () => setNavVisible(false),
    ModalProps: {
      keepMounted: true // Better open performance on mobile.
    }
  }

  // Drawer Props for Desktop screens
  const DesktopDrawerProps = {
    open: true,
    onOpen: () => null,
    onClose: () => null,
    onMouseEnter: () => {
      setNavHover(true)
    },
    onMouseLeave: () => {
      setNavHover(false)
    }
  }
  return (
    <SwipeableDrawer
      anchor='right'
      className='layout-vertical-nav'
      variant={hidden ? 'temporary' : 'permanent'}
      {...(hidden ? { ...MobileDrawerProps } : { ...DesktopDrawerProps })}
      sx={{
        width: navCollapsed ? collapsedNavWidth : navWidth
        // display: {
        //   xs: 'unset',
        //   md: 'none'
        // }
      }}
      PaperProps={{
        sx: {
          ...drawerColor(),
          ...drawerBgColor(),
          width: navCollapsed && !navHover ? collapsedNavWidth : navWidth,
          ...(!hidden && navCollapsed && navHover ? { boxShadow: 10 } : {}),
          borderRight: navigationBorderWidth === 0 ? 0 : `${navigationBorderWidth}px solid ${theme.palette.divider}`
        }
      }}
    >
      {children}
    </SwipeableDrawer>
  )
}

export default Drawer
