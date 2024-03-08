// ** MUI Imports
import { Theme } from '@mui/material/styles'

// ** Theme Type Import
import { Skin } from 'src/@core/layouts/types'

const Menu = (theme: Theme, skin: Skin) => {
  return {
    MuiMenu: {
      styleOverrides: {
        root: {
          '& .MuiMenu-paper': {
            borderRadius: 4,
            border: `1px solid ${theme.palette.secondary.main}`
          }
        }
      }
    }
  }
}

export default Menu
