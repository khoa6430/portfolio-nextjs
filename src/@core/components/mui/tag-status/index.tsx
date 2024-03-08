// ** React Imports
import { useState } from 'react'
// ** MUI Imports
import { Box, Typography, useTheme } from '@mui/material'

export enum Status {
  UPCOMING = 'UPCOMING',
  LIVE = 'LIVE',
  END = 'END'
}

export interface TagStatusProps {
  status?: string // Change the type to string
  miniTag?: boolean
}

export default function TagStatus(props: TagStatusProps) {
  const { status = 'LIVE', miniTag = false } = props
  const theme = useTheme()

  // Convert the status string to the corresponding Status enum value
  let convertedStatus: Status

  switch (status) {
    case 'UPCOMING':
      convertedStatus = Status.UPCOMING
      break
    case 'LIVE':
      convertedStatus = Status.LIVE
      break
    case 'END':
      convertedStatus = Status.END
      break
    default: // Default value if the status is unrecognized
      convertedStatus = Status.LIVE
      break
  }

  // Define the background colors for different status
  const statusColors = {
    [Status.UPCOMING]: theme.palette.status.upcoming,
    [Status.LIVE]: theme.palette.status.upcoming,
    [Status.END]: theme.palette.status.upcoming
  }

  return (
    <>
      {!miniTag && (
        <Box width={105} height={35} sx={{ backgroundColor: statusColors[convertedStatus], borderRadius: 40 }}>
          <Typography variant='label1' color={theme.palette.common.white} textAlign={'center'} component={'p'} py={8}>
            {convertedStatus}
          </Typography>
        </Box>
      )}
      {miniTag && (
        <Box width={70} height={24} sx={{ backgroundColor: statusColors[convertedStatus], borderRadius: 40 }}>
          <Typography variant='label3' color={theme.palette.common.white} textAlign={'center'} component={'p'} py={1}>
            {convertedStatus}
          </Typography>
        </Box>
      )}
    </>
  )
}
