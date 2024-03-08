// ** Theme Type Import
import { Theme } from '@mui/material/styles'

const Typography = (theme: Theme) => {
  return {
    h1: {
      fontFamily: 'Dosis',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 40,
      lineHeight: 48 / 40,
      // color: #212529;
      color: theme.palette.text.primary
    },
    h2: {
      fontFamily: 'Dosis',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 32,
      lineHeight: 38 / 32,
      color: theme.palette.text.primary
    },
    h3: {
      fontFamily: 'Dosis',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 28,
      lineHeight: 34 / 28,
      color: theme.palette.text.primary
    },
    h4: {
      fontFamily: 'Dosis',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 29 / 24,
      color: theme.palette.text.primary
    },
    h5: {
      fontFamily: 'Dosis',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 20,
      lineHeight: 24 / 20,
      color: theme.palette.text.primary
    },
    h6: {
      fontFamily: 'Dosis',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 19 / 16,
      color: theme.palette.text.primary
    },
    subtitle1: {
      letterSpacing: '0.15px',
      color: theme.palette.text.primary
    },
    subtitle2: {
      letterSpacing: '0.1px',
      color: theme.palette.text.secondary
    },
    body1: {
      letterSpacing: '0.15px',
      color: theme.palette.text.primary
    },
    body2: {
      lineHeight: 1.429,
      letterSpacing: '0.15px',
      color: theme.palette.text.secondary
    },
    button: {
      letterSpacing: '0.4px',
      color: theme.palette.text.primary
    },
    caption: {
      lineHeight: 1.25,
      letterSpacing: '0.4px',
      color: theme.palette.text.secondary
    },
    overline: {
      letterSpacing: '1px',
      color: theme.palette.text.secondary
    }
  }
}

export default Typography
