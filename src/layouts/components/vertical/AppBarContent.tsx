import { useLayoutEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
// ** Icons Imports
import MenuIcon from 'mdi-material-ui/Menu'
import Button from '@mui/material/Button'
// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'
// ** Next
import Link from 'next/link'
import Image from 'next/image'
// ** Components
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import HorizontalNav from '../HorizontalNav'
import LanguageDropdown from 'src/@core/layouts/components/shared-components/LanguageDropdown'

// ** Store
import { myAccountSelector } from 'src/store/apps/account/selectors'
import { useWindowSize } from 'src/hooks/useWindowSize'
import { useIsLogin, useMyAccountState } from 'src/store/apps/account/hooks'
import { InputAdornment, TextField } from '@mui/material'
import { Search, X } from 'react-feather'
import { VerticalNavItemsType } from 'src/@core/layouts/types'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
  verticalNavItems?: VerticalNavItemsType
}

const AppBarContent = (props: Props) => {
  const { verticalNavItems } = props
  // ** Props
  const ref = useRef<any>(null)
  const router = useRouter()
  const { asPath: route } = router
  const [boxWidth, setBoxWidth] = useState(0)
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  const isLogin = useIsLogin()
  const windowSize = useWindowSize()

  useLayoutEffect(() => {
    setBoxWidth(ref?.current?.offsetWidth)
  }, [windowSize])

  const [showClearIcon, setShowClearIcon] = useState('none')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === '' ? 'none' : 'flex')
  }
  const handleSearch = () => {
    const searchInput = ref.current.querySelector('input')
    router.push({
      pathname: '/shop',
      query: { keyword: searchInput.value }
    })
  }
  const handleClearValue = (): void => {
    // Clear the search input
    const searchInput = ref.current.querySelector('input')
    if (searchInput) {
      searchInput.value = ''
      setShowClearIcon('none')
    }
  }

  return (
    <Box
      ref={ref}
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <Link href='/' passHref>
          <Image src='/logo.svg' alt='Logo Header' width={hidden ? 60 : 120} height={hidden ? 60 : 100} />
        </Link>
      </Box>
      <Box className='actions-center' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {!hidden && <HorizontalNav {...props} />}
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        {!hidden && (
          <TextField
            sx={{ width: '250px', color: 'red' }}
            size='small'
            variant='outlined'
            placeholder='Tìm kiếm'
            onChange={handleChange}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleSearch()
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start' style={{ cursor: 'pointer' }} onClick={handleSearch}>
                  <Search />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  position='end'
                  style={{ display: showClearIcon, cursor: 'pointer' }}
                  onClick={handleClearValue}
                >
                  <X />
                </InputAdornment>
              )
            }}
          />
        )}
        {hidden && (
          <IconButton color='inherit' sx={{ ml: -2.75, padding: 0, width: '25px' }} onClick={toggleNavVisibility}>
            <MenuIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  )
}

export default AppBarContent
