import React from 'react'
import { ModalHeader, ModalTitle, ModalContainer, ModalCloseButton, ModalBackButton, CloseIcon } from './styles'
import { ModalProps } from './types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useTheme, useMediaQuery } from '@mui/material'
import { FaXmark } from 'react-icons/fa6'

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = '24px',
  bodyStyles = { padding: '24px' },
  headerBackground = 'transparent',
  backgroundColor,
  width = '380px',
  height = '100%',
  minWidth = 'auto',
  maxWidth = '900px',
  maxHeight = 'calc(100svh - 30px)',
  hideHeader = false,
  hideDivider = false,
  paddingHeader = '12px 24px',
  headerStyle = { padding: '0px 30px' },
  backgroundImage = 'none',
  overrideCssBtnClose = false,

  ...props
}) => {
  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <ModalContainer
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      height={height}
      backgroundColor={backgroundColor}
      overrideCssBtnClose={overrideCssBtnClose}
      backgroundImage={backgroundImage}
      {...props}
    >
      <Box sx={{ height: 'auto', maxHeight: 'auto' }}>
        {!hideCloseButton && (
          <Box
            sx={{
              position: 'absolute',
              top: '20px',
              right: '30px',
              cursor: 'pointer'
            }}
            onClick={() => onDismiss?.()}
          >
            <FaXmark color={theme.palette.common.black} fontSize={20} />
          </Box>
        )}

        {!hideHeader && (
          <>
            <Box sx={{ width: '100%' }}>{title}</Box>
          </>
        )}
      </Box>
      {title && !hideHeader && !hideDivider && (
        <Divider sx={{ mb: 0, mt: 0, borderColor: 'rgba(231, 227, 252, 0.38)' }} />
      )}
      <Box sx={{ ...bodyStyles }}>{children}</Box>
    </ModalContainer>
  )
}

export default Modal
