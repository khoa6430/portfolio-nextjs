// ** React Imports
import { Fragment, SyntheticEvent, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'
// ** Icons Imports
import { FaArrowRightFromBracket, FaUser } from 'react-icons/fa6'

// ** Context
import { useAuth } from 'src/hooks/useAuth'

// ** Type Imports
import { useSelector } from 'react-redux'
import { Settings } from 'src/@core/context/settingsContext'
import { myAccountSelector } from 'src/store/apps/account/selectors'
import { useModalConfirm } from 'src/hooks/modalFormConfirm'

interface Props {
  settings: Settings
}

// ** Styled Components
const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  paddingLeft: '8px'
}))

const UserDropdown = (props: Props) => {
  // ** Props
  const { data: accountInfo } = useSelector(myAccountSelector)
  const { settings } = props
  // ** States
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  // ** Hooks
  const router = useRouter()
  const { logout } = useAuth()

  // ** Vars
  const { direction } = settings
  const theme = useTheme()
  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = (url?: string) => {
    if (url) {
      router.push(url)
    }
    setAnchorEl(null)
  }

  const styles = {
    p: 8,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.palette.common.black
  }

  const handleLogout = () => {
    logout()
    handleDropdownClose()
  }

  const [onConfirm] = useModalConfirm({
    title: 'SIGN OUT NOW?',
    description: 'Are you sure you want to sign out?',
    onConfirm: () => {
      handleLogout()
    },
    onCancel: () => {},
    id: 'confirm-logout'
  })

  return (
    <Fragment>
      <Badge
        overlap='circular'
        onClick={handleDropdownOpen}
        sx={{ ml: 2, cursor: 'pointer' }}
        // badgeContent={<BadgeContentSpan />}
        // anchorOrigin={{
        //   vertical: 'bottom',
        //   horizontal: 'right'
        // }}
      >
        <Avatar
          alt={accountInfo?.email || ''}
          onClick={handleDropdownOpen}
          sx={{ width: 40, height: 40 }}
          src={
            accountInfo?.avatar
              ? 'https://i.vietgiaitri.com/2019/3/28/followers-cua-kha-banh-dai-dien-cho-ai-va-noi-len-dieu-gi-5011f1.jpg'
              : '/image/avatars/empty.png'
          }
        />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{
          '& .MuiMenu-paper': {
            width: 'fit-content',
            mt: 4,
            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
            '& .MuiMenu-list': {
              px: 16
            }
          }
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
        disableScrollLock
      >
        <Typography px={8} pt={8} component={'p'} variant='label3'>
          Sign in as
        </Typography>
        <Typography px={8} pb={8} component={'p'} variant='paragraph2'>
          {accountInfo?.fullName}
        </Typography>
        <Divider sx={{ color: theme.palette.customColors.neutralGray }} />
        <MenuItem onClick={() => handleDropdownClose(`/apps/profile`)} sx={{ px: 0 }}>
          <Box sx={styles}>
            <FaUser />
            <Typography ml={6} variant='paragraph3'>
              Profile
            </Typography>
          </Box>
        </MenuItem>
        <Divider sx={{ color: theme.palette.customColors.neutralGray }} />
        <MenuItem onClick={onConfirm} sx={{ px: 0 }}>
          <Box sx={styles}>
            <FaArrowRightFromBracket />
            <Typography ml={6} variant='paragraph3'>
              Sign Out
            </Typography>
          </Box>
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

export default UserDropdown
