// ** MUI Imports
import { Theme } from '@mui/material/styles'

// ** Util Import

const FormHelperText = (theme: Theme) => {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: 'blue',
          margin: 0,
          fontFamily: 'Dosis',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: 12,
          lineHeight: '21px',
          '&.Mui-error': {
            color: theme.palette.error.main
          }
        }
      }
    }
  }
}
export default FormHelperText
