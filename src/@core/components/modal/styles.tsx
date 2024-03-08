import IconButton from '@mui/material/IconButton'
import React from 'react'
import styled from 'styled-components'
import { ModalProps } from './types'
import WindowClose from 'mdi-material-ui/WindowClose'

export const ModalHeader = styled.div<{ background?: string }>`
  align-items: center;
  background: ${({ background }) => background || 'transparent'};
  display: flex;
  padding: 12px 24px;
  min-height: 60px;
  position: relative;
`

export const ModalTitle = styled.div`
  align-items: center;
  flex: 1;
  justify-content: center;
`

export const ModalBody = styled.div<{ heightStyled?: string }>`
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
  height: ${({ heightStyled }) => heightStyled};
`

export const ModalCloseButton: React.FC = () => {
  return (
    <CloseIcon>
      <WindowClose />
    </CloseIcon>
  )
}

export const ModalBackButton: React.FC<{ onBack: ModalProps['onBack'] }> = ({ onBack }) => {
  return (
    <IconButton size='small' aria-label='settings' className='card-more-options'>
      Back
    </IconButton>
  )
}

export const ModalContainer = styled.div<{
  overrideCssBtnClose?: boolean
  minWidth?: string
  maxWidth?: string
  maxHeight?: string
  width?: string
  height?: string
  bodyPadding?: string
  backgroundImage?: string
  backgroundColor?: string
}>`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})` || 'none'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  background-color: ${({ backgroundColor }) => `${backgroundColor || '#30334E'}`};
  color: rgba(234, 234, 255, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 10px;
  position: relative;
  //overflow-y: auto;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  text-align: left;
  box-shadow: none;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  max-height: ${({ maxHeight }) => maxHeight || 'auto'};
  z-index: 9999;
  min-width: ${({ minWidth }) => minWidth || 'auto'};
  max-width: ${({ maxWidth }) => maxWidth || '1000px'};
  padding: ${({ bodyPadding }) => bodyPadding || '0'};
  border: 1px solid rgba(234, 234, 255, 0.12);
  @media screen and (max-width: 768px) {
    .btn-esc {
      span {
        display: none;
      }
    }
  }
`

export const CloseIcon = styled.div`
  font-size: 1.125rem;
  z-index: 3;
  cursor: pointer;
`
