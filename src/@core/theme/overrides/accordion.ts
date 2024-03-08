// ** MUI Imports
import { Theme } from '@mui/material/styles'

const Accordion = (theme: Theme) => {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '0 !important',
          boxShadow: 'none',
          '&:first-of-type': {},
          '&:last-of-type': {},
          '&.Mui-disabled': {
            // backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`
          },
          '&.Mui-expanded': {
            // boxShadow: theme.shadows[3]
          }
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: `0 0`,
          minHeight: '24px !important',
          '& 	.Mui-expanded': {
            // margin: '0 0 !important'
          },
          '& + .MuiCollapse-root': {
            // minHeight: '24px !important',
            '& .MuiAccordionDetails-root:first-of-type': {
              paddingTop: 15
            }
          }
        },
        content: {
          margin: `${theme.spacing(3.25)} 0`
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: theme.spacing(5),
          '& + .MuiAccordionDetails-root': {
            paddingTop: 0
          }
        }
      }
    }
  }
}

export default Accordion
