// ** MUI Imports
import { ThemeOptions } from '@mui/material'

// ** To use core palette, uncomment the below import
import corePalette from 'src/@core/theme/palette'

// ** To use mode (light/dark), skin(default/bordered/semi-dark), direction(ltr/rtl), etc. for conditional styles, uncomment below line
import { useSettings } from 'src/@core/hooks/useSettings'

const UserThemeOptions = (): ThemeOptions => {
  // ** To use mode (light/dark), skin(default/bordered/semi-dark), direction(ltr/rtl), etc. for conditional styles, uncomment below line
  const { settings } = useSettings()

  // ** To use mode (light/dark), skin(default/bordered/semi-dark), direction(ltr/rtl), etc. for conditional styles, uncomment below line
  const { mode, skin } = settings

  // ** To use core palette, uncomment the below line
  const palette = corePalette(mode, skin)

  return {
    palette: {
      primary: {
        light: '#139b47',
        main: '#139b47',
        dark: '#139b47',
        contrastText: '#FFF'
      },
      secondary: {
        main: '#2776bb'
      },
      success: {
        light: '#83E542',
        main: '#72E128',
        dark: '#64C623',
        contrastText: '#FFF'
      },
      error: {
        light: '#FF625F',
        main: '#FF4D49',
        dark: '#E04440',
        contrastText: '#FFF'
      },
      warning: {
        light: '#FDBE42',
        main: '#FDB528',
        dark: '#DF9F23',
        contrastText: '#FFF'
      }
    },
    zIndex: {
      appBar: 1,
      drawer: 1100
    },
    typography: {
      // ADD NEW CUSTOM
      label1: {
        fontFamily: 'Dosis',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '19px'
      },
      label2: {
        fontFamily: 'Dosis',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '17px'
      },
      label3: {
        fontFamily: 'Dosis',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '24px'
      },
      paragraph1: {
        fontFamily: 'Dosis',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '19px'
      },
      paragraph2: {
        fontFamily: 'Dosis',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px'
      },
      paragraph3: {
        fontFamily: 'Dosis',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '14px'
      },
      paragraph4: {
        fontFamily: 'Dosis',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '10px',
        lineHeight: '12px'
      }
    }
  }
}

export default UserThemeOptions
