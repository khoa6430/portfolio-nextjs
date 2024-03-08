// ** MUI Imports
import { Theme } from '@mui/material/styles'

// ** Theme Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const Button = (theme: Theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Dosis',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: 14,
          lineHeight: '17px',
          borderRadius: 4,
          padding: `${theme.spacing(1.75, 3)}`,
          color: theme.palette.customColors.tertiary,
          boxShadow: 'none',
          transition: 'none',
          textTransform: 'none',
          '&.MuiButton-textPrimary:hover': {
            backgroundColor: theme.palette.customColors.grayBg
          },
          '&.MuiButton-textSecondary:hover': {
            backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.08)
          },
          '&.MuiButton-textSuccess:hover': {
            backgroundColor: hexToRGBA(theme.palette.success.main, 0.08)
          },
          '&.MuiButton-textError:hover': {
            backgroundColor: hexToRGBA(theme.palette.error.main, 0.08)
          },
          '&.MuiButton-textWarning:hover': {
            backgroundColor: hexToRGBA(theme.palette.warning.main, 0.08)
          },
          '&.MuiButton-textInfo:hover': {
            backgroundColor: hexToRGBA(theme.palette.info.main, 0.08)
          },
          // variant text custom
          '&.MuiButton-text': {
            padding: `${theme.spacing(8, 8)}`,
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&.MuiButton-textPrimary:hover': {
              backgroundColor: 'transparent'
            },
            '&.MuiButton-textSecondary:hover': {
              backgroundColor: 'transparent'
            },
            '&.MuiButton-textSuccess:hover': {
              backgroundColor: hexToRGBA(theme.palette.background.default, 0.08)
            },
            '&.MuiButton-textError:hover': {
              backgroundColor: hexToRGBA(theme.palette.background.default, 0.08)
            },
            '&.MuiButton-textWarning:hover': {
              backgroundColor: hexToRGBA(theme.palette.background.default, 0.08)
            },
            '&.MuiButton-textInfo:hover': {
              backgroundColor: hexToRGBA(theme.palette.background.default, 0.08)
            }
          }
        },
        contained: {
          padding: `${theme.spacing(1.75, 5.5)}`,
          '&.MuiButton-contained:hover': {
            color: theme.palette.common.white
            // backgroundColor: theme.palette.customColors.grayBg
          }
        },

        outlined: {
          lineHeight: 1.572,
          padding: `${theme.spacing(1.75, 5.25)}`,
          '&.MuiButton-outlinedPrimary:hover': {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08)
          },
          '&.MuiButton-outlinedSecondary:hover': {
            backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.08)
          },
          '&.MuiButton-outlinedSuccess:hover': {
            backgroundColor: hexToRGBA(theme.palette.success.main, 0.08)
          },
          '&.MuiButton-outlinedError:hover': {
            backgroundColor: hexToRGBA(theme.palette.error.main, 0.08)
          },
          '&.MuiButton-outlinedWarning:hover': {
            backgroundColor: hexToRGBA(theme.palette.warning.main, 0.08)
          },
          '&.MuiButton-outlinedInfo:hover': {
            backgroundColor: hexToRGBA(theme.palette.info.main, 0.08)
          }
        },
        sizeSmall: {
          lineHeight: 1.693,
          padding: `${theme.spacing(1, 2.25)}`,
          '&.MuiButton-contained': {
            padding: `${theme.spacing(1, 3.25)}`
          },
          '&.MuiButton-outlined': {
            lineHeight: 1.539,
            padding: `${theme.spacing(1, 3)}`
          }
        },
        sizeLarge: {
          lineHeight: 1.734,
          padding: `${theme.spacing(2, 5.5)}`,
          '&.MuiButton-contained': {
            padding: `${theme.spacing(2, 6.5)}`
          },
          '&.MuiButton-outlined': {
            lineHeight: 1.6,
            padding: `${theme.spacing(2, 6.25)}`
          }
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: themeConfig.disableRipple
      }
    }
  }
}

export default Button
