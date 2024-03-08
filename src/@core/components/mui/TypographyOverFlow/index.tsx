import React from 'react'
import { Typography, TypographyProps } from '@mui/material'

interface TypographyOverFlowProps extends TypographyProps {
  content: string
  lineClamp?: number
}

const TypographyOverFlow: React.FC<TypographyOverFlowProps> = props => {
  const { content = '', lineClamp = 2, ...typographyProps } = props

  const lineClampStyle = {
    display: '-webkit-box',
    WebkitLineClamp: lineClamp,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    ...(typographyProps.sx as object) // Merge additional styles from parent
  }

  return (
    <Typography variant='label1' sx={lineClampStyle} {...typographyProps}>
      {content}
    </Typography>
  )
}

export default TypographyOverFlow
