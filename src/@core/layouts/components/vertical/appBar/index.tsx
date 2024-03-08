// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { styled, useTheme } from '@mui/material/styles'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar'
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { Box } from '@mui/material'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
  verticalAppBarContent?: (props?: any) => ReactNode
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  transition: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  // padding: theme.spacing(0, 6),
  backgroundColor: 'transparent',
  boxShadow: '0 1px 3px rgba(0,0,0,.1)',
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  width: '100%',
  padding: '0 !important',
  borderBottomLeftRadius: theme.shape.borderRadius,
  borderBottomRightRadius: theme.shape.borderRadius,
  minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
  transition: 'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out'
}))

const LayoutAppBar = (props: Props) => {
  // ** Props
  const { settings, verticalAppBarContent: userVerticalAppBarContent } = props

  // ** Hooks
  const theme = useTheme()
  const scrollTrigger = useScrollTrigger({ threshold: 0, disableHysteresis: true })

  // ** Vars
  const { skin, appBar, appBarBlur, contentWidth } = settings

  const appBarFixedStyles = () => {
    return {
      borderRadius: 0,
      ...(appBarBlur && { backdropFilter: 'blur(8px)' }),
      boxShadow: theme.shadows[skin === 'bordered' ? 0 : 3],
      // backgroundColor: hexToRGBA(theme.palette.background.paper, appBarBlur ? 0.9 : 1),
      backgroundColor: theme.palette.background.paper,
      zIndex: 1,
      ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}`, borderTopWidth: 0 })
    }
  }

  if (appBar === 'hidden') {
    return null
  }

  return (
    <AppBar
      style={{
        zIndex: 99,
        paddingLeft: 0,
        paddingRight: 0,
        boxShadow: theme.shadows[skin === 'bordered' ? 0 : 3]
      }}
      elevation={0}
      color='default'
      className='layout-navbar'
      position={appBar === 'fixed' ? 'sticky' : 'static'}
    >
      <Toolbar
        sx={{
          px: `${theme.spacing(16)} !important`,
          ...(appBar === 'fixed' /* && scrollTrigger */ && { ...appBarFixedStyles() }),
          contentWidth: 'boxed',
          ...(contentWidth === 'boxed' && {
            '@media (min-width:1440px)': { maxWidth: `unset` }
          }),
          '@media (min-width:992px)': { padding: '10px 16px !important' },
          boxShadow: 'none',
          padding: '16px 16px !important'
        }}
      >
        <Box
          sx={{
            width: '100%',
            mx: 'auto',
            '@media (min-width:992px)': { maxWidth: `1170px` }
          }}
        >
          {(userVerticalAppBarContent && userVerticalAppBarContent(props)) || null}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default LayoutAppBar
