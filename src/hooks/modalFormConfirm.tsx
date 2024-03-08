import { memo, useEffect } from 'react'
import styled from 'styled-components'
import { Modal, useModal } from 'src/@core/components/modal'

// ** Mui import
import { Box, Button, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// ** Third Party Components
import { FaXmark } from 'react-icons/fa6'

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 0px;
  width: 100%;
  //max-width: 580px;
`

const ConfirmBody = memo((props: any) => {
  // ** Hooks
  const theme = useTheme()
  const { title, onConfirm, onDismiss, description, onCancel, isOpen } = props

  useEffect(() => {
    return () => handleDismiss()
  }, [isOpen])

  const handleDismiss = () => {
    onDismiss()
    onCancel()
  }

  const handleConfirm = () => {
    onConfirm()
    handleDismiss()
  }

  return (
    <Modal
      title=''
      hideHeader
      hideCloseButton
      headerStyle={{ padding: '0', minHeight: 'auto' }}
      onDismiss={handleDismiss}
      width='calc(100% - 30px)'
      maxWidth='600px'
      maxHeight='200px'
      backgroundColor={theme.palette.common.white}
      bodyStyles={{ overflowY: 'auto', height: '100vh', zIndex: 39 }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'end', cursor: 'pointer' }} pr={11} mt={1} onClick={onDismiss}>
        <FaXmark />
      </Box>
      <FormBody>
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Typography variant='h3'>{title}</Typography>
        </Box>
        {description && (
          <Box
            textAlign={'center'}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}
          >
            <Typography sx={{ fontSize: 14 }}>{description}</Typography>
          </Box>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
          <Button variant='contained' onClick={() => handleConfirm()} sx={{ mr: 4 }}>
            Yes
          </Button>
          <Button variant='outlined' color='secondary' onClick={() => handleDismiss()}>
            No
          </Button>
        </Box>
      </FormBody>
    </Modal>
  )
})

interface Props {
  title?: string
  description?: string
  onConfirm: () => void
  onCancel: () => void
  id?: string
}

export const useModalConfirm = (props: Props) => {
  const [onConfirm] = useModal(<ConfirmBody {...props} />, false, true, props?.id || 'confirm-modal')

  return [
    () => {
      onConfirm()
    }
  ]
}
