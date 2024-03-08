// ** React Imports
import { Fragment, ReactNode, SyntheticEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myAccountSelector } from 'src/store/apps/account/selectors'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { styled, Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiMenu, { MenuProps } from '@mui/material/Menu'
import MuiMenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import Typography, { TypographyProps } from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'

// ** Icons Imports
import CircleIcon from '@mui/icons-material/Circle'
import NotificationsIcon from '@mui/icons-material/Notifications'

// ** Third Party Components
import PerfectScrollbarComponent from 'react-perfect-scrollbar'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Type Imports
import { Settings } from 'src/@core/context/settingsContext'
import { CustomAvatarProps } from 'src/@core/components/mui/avatar/types'
import moment from 'moment'
import { FaBell } from 'react-icons/fa6'

interface Props {
  settings: Settings
}

// ** Styled Menu component
const Menu = styled(MuiMenu)<MenuProps>(({ theme }) => ({
  '& .MuiMenu-paper': {
    width: 380,
    overflow: 'hidden',
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  '& .MuiMenu-list': {
    paddingTop: 10
  }
}))

// ** Styled MenuItem component
const MenuItem = styled(MuiMenuItem)<MenuItemProps>(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  borderBottom: `1px solid ${theme.palette.divider}`
}))

const styles = {
  maxHeight: 344,
  '& .MuiMenuItem-root:last-of-type': {
    border: 0
  }
}

// ** Styled PerfectScrollbar component
const PerfectScrollbar = styled(PerfectScrollbarComponent)({
  ...styles
})

// ** Styled Avatar component
const Avatar = styled(CustomAvatar)<CustomAvatarProps>({
  width: '2.375rem',
  height: '2.375rem',
  fontSize: '1.125rem'
})

// ** Styled component for the title in MenuItems
const MenuItemTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  fontSize: '0.75rem',
  width: 'calc(100% - 2.375rem)',
  whiteSpace: 'initial'
}))

// ** Styled component for the subtitle in MenuItems
const MenuItemSubtitle = styled(Typography)<TypographyProps>({
  flex: '1 1 100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
})

const NotificationDropdown = (props: Props) => {
  // ** Hook
  const theme = useTheme()
  // ** Props
  const { settings } = props

  // * Socket
  // const socket = useSocket()

  // ** States
  const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | null>(null)
  const [notificationList, setNotifications] = useState<any[]>([
    {
      id: 1,
      name: '',
      isTracked: true
    },
    {
      id: 2,
      name: ''
    }
  ])
  const [notificationNotChecked, setNotificationsNotChecked] = useState(0)
  const [notificationTrackedCount, setNotificationTrackedCount] = useState(0)

  // ** Hook
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  // ** Vars
  const { direction } = settings
  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
    if (notificationNotChecked > 0) {
      // Call api get list notification
      // Update notification readed
    }
  }

  const handleDropdownClose = () => {
    setAnchorEl(null)
  }

  // ** Service
  const { accessToken, data: account } = useSelector(myAccountSelector)

  const handleClickNotification = (noti: any) => {}

  const handleLoadAvatar = (noti: any) => {
    return <Avatar src={`/images/avatars/1.png`} placeholder='icon' />
  }

  const ScrollWrapper = ({ children }: { children: ReactNode }) => {
    if (hidden) {
      return <Box sx={{ ...styles, overflowY: 'auto', overflowX: 'hidden' }}>{children}</Box>
    } else {
      return (
        <PerfectScrollbar options={{ wheelPropagation: false, suppressScrollX: true }}>{children}</PerfectScrollbar>
      )
    }
  }

  // Connect socket
  // useEffect( () => {
  //     const socketPath = `notification/owner/${account?.id}`
  //     if (socket) {
  //         socket.on( socketPath, function (notificationInfo: any) {
  //             setNotifications( [{...notificationInfo, status: 1}, ...notificationList] )
  //             setNotificationTrackedCount( notificationTrackedCount + 1 )
  //         } )
  //     }
  //     return () => {
  //         if (socket) socket.off( socketPath )
  //     }
  // }, [socket, accessToken, notificationList] )

  // Only view notification read
  useEffect(() => {
    if (notificationList) {
      const dataNotCheck = notificationList.filter(_data => _data?.isReaded === false)
      setNotificationsNotChecked(dataNotCheck.length)
    }
  }, [notificationList])

  return (
    <Fragment>
      <IconButton
        color='inherit'
        aria-haspopup='true'
        onClick={handleDropdownOpen}
        sx={{ position: 'relative' }}
        aria-controls='customized-menu'
      >
        {notificationNotChecked > 0 && (
          <Box
            sx={{
              position: 'absolute',
              lineHeight: 0,
              top: '3px',
              right: '6px'
            }}
          >
            <CircleIcon sx={{ color: '#FFC700', fontSize: 10 }} />
          </Box>
        )}
        <FaBell />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleDropdownClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
      >
        <MenuItem disableRipple>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Typography sx={{ fontWeight: 600 }}>Notifications</Typography>
            <CustomChip
              skin='light'
              size='small'
              label={`${notificationTrackedCount || 1} New`}
              color='primary'
              sx={{ height: 20, fontSize: '0.75rem', fontWeight: 500, borderRadius: '10px' }}
            />
          </Box>
        </MenuItem>
        <ScrollWrapper>
          {notificationList?.map((notification: any) => (
            <MenuItem
              key={notification?.id}
              onClick={() => handleClickNotification(notification)}
              sx={{ backgroundColor: notification?.isTracked ? '#2125292e' : theme.palette.common.white }}
            >
              <Grid container spacing={2} direction='row'>
                <Grid item xs={12}>
                  <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    {handleLoadAvatar(notification)}
                    <Box
                      sx={{
                        mx: 4,
                        pl: 5,
                        flex: '1 1',
                        display: 'flex',
                        overflow: 'hidden',
                        flexDirection: 'column',
                        width: 'calc(100%)'
                      }}
                    >
                      <MenuItemTitle>Jake Kim has just auctioned product B for $1000</MenuItemTitle>
                      <MenuItemSubtitle variant='body2'>
                        <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                          {moment().format('HH:mm - DD MMM, YYYY')}
                        </Typography>
                      </MenuItemSubtitle>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={2}></Grid>
              </Grid>
            </MenuItem>
          ))}
        </ScrollWrapper>
        <MenuItem
          disableRipple
          sx={{
            borderBottom: 0,
            borderTop: theme => `1px solid ${theme.palette.divider}`
          }}
        >
          <Button
            fullWidth
            sx={{
              pt: 8,
              pb: 8
            }}
            variant='contained'
            onClick={handleDropdownClose}
          >
            Read All Notifications
          </Button>
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

export default NotificationDropdown
