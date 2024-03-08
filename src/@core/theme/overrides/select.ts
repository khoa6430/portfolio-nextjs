// ** MUI Imports
import { Theme } from '@mui/material/styles'

const select = (theme: Theme) => {
  return {
    MuiSelect: {
      styleOverrides: {
        root: {
          width: '100%',
          height: 'auto'
        },
        select: {
          minWidth: '6rem !important',
          paddingTop: '9px !important',
          paddingBottom: '9px !important',
          paddingLeft: '8.5px !important',
          '&.MuiTablePagination-select': {
            minWidth: '1.5rem !important'
          },
          '&.Mui-disabled ~ .MuiOutlinedInput-notchedOutline': {
            // borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
          }
        }
      }
    }
  }
}

export default select
