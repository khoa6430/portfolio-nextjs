// ** MUI Imports
import { Theme } from '@mui/material/styles'

// ** Theme Type Import
import { Skin } from 'src/@core/layouts/types'

const Autocomplete = (theme: Theme, skin: Skin) => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          height: 42,
          '& input::placeholder': {
            fontFamily: 'Dosis',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            color: theme.palette.text.secondary,
            opacity: 1
          },
          '& .MuiOutlinedInput-root': {
            padding: '0 !important',
            input: {
              fontFamily: 'Dosis',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '20px',
              padding: '0 30px 0 9px !important',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overFlow: 'hidden',
              height: '42px !important'
            }
          },
          '& .MuiAutocomplete-root .MuiOutlinedInput-root .MuiAutocomplete-input': {
            padding: '0 !important'
          }
        }
      }
    }
  }
}

export default Autocomplete
