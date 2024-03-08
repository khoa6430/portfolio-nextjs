// ** Type Imports
import { PaletteMode } from '@mui/material'
import { Skin } from 'src/@core/layouts/types'

const DefaultPalette = (defaultMode: PaletteMode, skin: Skin) => {
  // ** Vars
  const lightColor = '76, 78, 100'
  const darkColor = '234, 234, 255'
  // disable color mode
  const mainColor = '#FFFF'
  const mode = 'light'
  const defaultBgColor = () => {
    if (skin === 'bordered' && mode === 'light') {
      return '#FFF'
      // } else if (skin === 'bordered' && mode === 'dark') {
      //   return '#30334E'
    } else if (mode === 'light') {
      return '#fff'
    } else return '#1D2032' // '#282A42'
  }

  return {
    customColors: {
      dark: darkColor,
      main: mainColor,
      light: lightColor,
      darkBg: '#f2f2f2', // '#282A42',
      lightBg: '#fff',
      bodyBg: mode === 'light' ? '#fff' : '#fff', // '#282A42', // Same as palette.background.default but doesn't consider bordered skin
      tooltipBg: mode === 'light' ? '#262732' : '#464A65',
      tableHeaderBg: mode === 'light' ? '#F5F5F7' : '#3A3E5B',
      tertiary: '#3D4043',
      grayBg: '#565656',
      neutralGray: '#9999',
      extremeYellow: '#FFB529',
      red1: '#FF0000',
      brandeisBlue: '#0573ff',
      coralRed: '#f76b6a',
      whiteSmoke: '#f1f1f1',
      gainsboroGray: '#dcdcdc'
    },
    status: {
      live: '#28A745',
      end: '#878787',
      upcoming: '#107FED'
    },
    common: {
      black: '#000',
      white: '#FFF'
    },
    mode: mode,
    primary: {
      light: '#139b47',
      main: '#139b47',
      dark: '#139b47',
      contrastText: '#FFF'
    },
    secondary: {
      light: '#2776bb',
      main: '#2776bb',
      dark: '#2776bb',
      contrastText: '#FFF'
    },
    success: {
      light: '#83E542',
      main: '#72E128',
      dark: '#64C623',
      contrastText: '#FFF'
    },
    error: {
      light: '#FF4A4A',
      main: '#FF4A4A',
      dark: '#FF4A4A',
      contrastText: '#FFF'
    },
    warning: {
      light: '#FDBE42',
      main: '#FDB528',
      dark: '#DF9F23',
      contrastText: '#FFF'
    },
    info: {
      light: '#40CDFA',
      main: '#26C6F9',
      dark: '#21AEDB',
      contrastText: '#FFF'
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#616161',
      A700: '#303030'
    },
    text: {
      primary: `#000`,
      secondary: `#6C757D`,
      disabled: `rgba(${mainColor}, 0.38)`
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === 'light' ? '#FFF' : '#30334E',
      default: defaultBgColor()
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.05)`,
      hoverOpacity: 0.05,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.26)`,
      disabledBackground: `rgba(${mainColor}, 0.12)`,
      focus: `rgba(${mainColor}, 0.12)`
    }
  }
}

export default DefaultPalette
