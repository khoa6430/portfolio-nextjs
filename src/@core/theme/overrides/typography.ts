// ** MUI Imports
import { Theme } from '@mui/material/styles'

const Typography = (theme: Theme) => {
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          gutterBottom: {
            marginBottom: theme.spacing(2)
          },
          variantMapping: {
            // Map the new variant to render a <h1> by default
            poster: 'h1'
          }
        }
      }
    }
  }
}

export default Typography
