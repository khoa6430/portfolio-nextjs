// ** MUI Imports
import { Theme } from '@mui/material/styles'

const input = (theme: Theme) => {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.text.secondary,
          height: '42px'
          // backgroundColor: theme.palette.common.black}
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.common.black,
          lineHeight: '1.5rem',
          '&:before': {
            borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
          },
          '&.Mui-disabled:before': {
            borderBottomStyle: 'solid'
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          backgroundColor: `rgba(${theme.palette.customColors.main}, 0.05)`,
          '&:hover:not(.Mui-disabled)': {
            backgroundColor: `rgba(${theme.palette.customColors.main}, 0.08)`
          },
          '&:before': {
            borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
          },
          '&.Mui-disabled': {
            backgroundColor: `rgba(${theme.palette.customColors.main}, 0.05)`,
            '&:before': {
              borderBottomStyle: 'solid'
            }
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 24 / 16,
          color: theme.palette.text.primary,
          height: '42px',
          border: `1px solid ${theme.palette.secondary.main}`,

          textarea: {
            padding: '0 12px',
            width: '100%',
            '&::placeholder': {
              color: theme.palette.text.secondary,
              opacity: 1
            }
          },
          input: {
            padding: '0 12px',
            height: '40px',
            width: '100%',
            '&::placeholder': {
              color: theme.palette.text.secondary,
              opacity: 1
            },
            maxHeight: '100%'
          },
          'input:-webkit-autofill::first-line': {
            fontSize: '16px !important'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            //Focus custom
            border: 'none'
          },
          '&:hover:not(.Mui-focused):not(.Mui-disabled) .MuiOutlinedInput-notchedOutline': {
            border: 'none'
          },
          '&.Mui-error': {
            borderColor: `${theme.palette.error.main}`
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none'
          }
        }
      }
    }
  }
}

export default input
