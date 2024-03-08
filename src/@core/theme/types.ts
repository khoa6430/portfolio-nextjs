declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      dark: string
      main: string
      light: string
      bodyBg: string
      darkBg: string
      lightBg: string
      tooltipBg: string
      tableHeaderBg: string
      tertiary: string
      grayBg: string
      neutralGray: string
      extremeYellow: string
      red1: string
      brandeisBlue: string
      coralRed: string
      whiteSmoke: string
      gainsboroGray: string
    }
    status: {
      live: string
      end: string
      upcoming: string
    }
  }
  interface PaletteOptions {
    customColors?: {
      dark?: string
      main?: string
      light?: string
      bodyBg?: string
      darkBg?: string
      lightBg?: string
      tooltipBg?: string
      tableHeaderBg?: string
      tertiary?: string
      grayBg?: string
      neutralGray?: string
      extremeYellow?: string
      red1?: string
      brandeisBlue?: string
      coralRed?: string
      whiteSmoke?: string
      gainsboroGray?: string
    }
    status?: {
      live: string
      end: string
      upcoming: string
    }
  }
  interface TypographyVariants {
    label1: React.CSSProperties
    label2: React.CSSProperties
    label3: React.CSSProperties
    paragraph1: React.CSSProperties
    paragraph2: React.CSSProperties
    paragraph3: React.CSSProperties
    paragraph4: React.CSSProperties
  }

  // allow configuration using createTheme
  interface TypographyVariantsOptions {
    label1?: React.CSSProperties
    label2?: React.CSSProperties
    label3?: React.CSSProperties
    paragraph1?: React.CSSProperties
    paragraph2?: React.CSSProperties
    paragraph3?: React.CSSProperties
    paragraph4?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  // Update the Typography's variant prop options
  interface TypographyPropsVariantOverrides {
    label1: true
    label2: true
    label3: true
    paragraph1: true
    paragraph2: true
    paragraph3: true
    paragraph4: true
  }
}
export {}
