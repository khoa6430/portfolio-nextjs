import IconButton from "@mui/material/IconButton";
import React from "react";
import styled from "styled-components";
import WindowClose from 'mdi-material-ui/WindowClose'
import { ModalProps } from 'src/@core/components/modal'

export const ModalHeader = styled.div<{ background?: string}>`
  align-items: center;
  background: ${({ background }) => background || "transparent"};
  display: flex;
  padding: 12px 24px;
  min-height: 60px;
  position: relative;
`;

export const ModalTitle = styled.div`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const ModalBody = styled.div<{ heightStyled?: string }>`
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
  height: ${({ heightStyled }) => heightStyled};
`;

export const ModalCloseButton: React.FC = () => {
  return (
    <CloseIcon><WindowClose /></CloseIcon>
  );
};

export const ModalBackButton: React.FC<{ onBack: ModalProps["onBack"] }> = ({ onBack }) => {
  return (
    <IconButton size='small' aria-label='settings' className='card-more-options'>
      Back
    </IconButton>
  );
};

export const ModalContainer = styled.div<{ minWidth?: string, maxWidth?: string, bodyPadding?: string }>`
  background-color: #30334E;
  color: rgba(234, 234, 255, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  position: relative;
  overflow-y: hidden;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  box-shadow: none;
  width: 100%;
  max-height: 100vh;
  z-index: 9999;
  min-width: ${({ minWidth }) => minWidth || '100%'};
  max-width: ${({ maxWidth }) => maxWidth || '1000px'};
  padding:  ${({ bodyPadding }) => bodyPadding || '0'};
  margin: -40px;
  @media screen and (max-width: 768px) {
    width: auto;
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

export const CloseIcon = styled.div
`
    font-size: 1.125rem;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 3;
    cursor: pointer;
`
