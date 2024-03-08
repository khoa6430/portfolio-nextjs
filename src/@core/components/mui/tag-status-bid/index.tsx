import { useState } from 'react'
import { Box, SxProps, Typography, useTheme } from '@mui/material'

export enum BidStatus {
  Bidding = 'Bidding',
  Waiting = 'Waiting',
  Win = 'Win',
  Failed = 'Failed'
}

export interface TagStatusBidProps {
  status?: BidStatus
  sx: SxProps
}

export default function TagStatusBid(props: TagStatusBidProps) {
  const { status = BidStatus.Bidding, sx } = props
  const theme = useTheme()

  const statusColors = {
    [BidStatus.Bidding]: theme.palette.status.upcoming,
    [BidStatus.Waiting]: theme.palette.secondary.main,
    [BidStatus.Win]: theme.palette.status.live,
    [BidStatus.Failed]: theme.palette.error.main
  }

  const statusColor = statusColors[status] || theme.palette.primary.main

  return (
    <>
      <Box width={54} height={24} sx={{ borderRadius: 40, border: `1px solid ${statusColor}`, ...sx }}>
        <Typography variant='paragraph4' color={statusColor} textAlign='center' component='p' py={5}>
          {status}
        </Typography>
      </Box>
    </>
  )
}
