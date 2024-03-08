import { AnimatePresence, m, Variants, LazyMotion, domAnimation } from "framer-motion";
import React, { createContext, useState, useRef, useEffect } from 'react'
import styled, { keyframes } from "styled-components";
import { Handler } from "./types";
import OverlayLayout from '../overlay/overlay-layout';

const animationVariants: Variants = {
  initial: { transform: "translateX(0px)" },
  animate: { transform: "translateX(0px)" },
  exit: { transform: "translateX(0px)" },
};

const animationMap = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
};
interface ModalsContext {
  isOpen: boolean;
  nodeId: string;
  modalNode: React.ReactNode;
  setModalNode: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  onPresent: (node: React.ReactNode, newNodeId: string) => void;
  onDismiss: Handler;
  setCloseOnOverlayClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const appearAnimation = keyframes`
  from { opacity:0 }
  to { opacity:1 }
`;

const disappearAnimation = keyframes`
  from { opacity:1 }
  to { opacity:0 }
`;

const ModalWrapper = styled(m.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  will-change: opacity;
  opacity: 0;
  &.appear {
    animation: ${appearAnimation} 0.3s ease-in-out forwards;
  }
  &.disappear {
    animation: ${disappearAnimation} 0.3s ease-in-out forwards;
  }
`;

export const Context = createContext<ModalsContext>({
  isOpen: false,
  nodeId: "",
  modalNode: null,
  setModalNode: () => null,
  onPresent: () => null,
  onDismiss: () => null,
  setCloseOnOverlayClick: () => true,
});

// @ts-ignore
const ModalProvider: React.FC = ({ children }: { children: any}): any => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalNode, setModalNode] = useState<React.ReactNode>();
  const [nodeId, setNodeId] = useState("");
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);
  const animationRef = useRef<HTMLDivElement>(null);

  const handlePresent = (node: React.ReactNode, newNodeId: string) => {
    setModalNode(node);
    setIsOpen(true);
    setNodeId(newNodeId);
  };

  const handleDismiss = () => {
    setModalNode(undefined);
    setIsOpen(false);
    setNodeId("");
  };

  const handleOverlayDismiss = () => {
    if (closeOnOverlayClick) {
      handleDismiss();
    }
  };

  const handleEsc = (event: any) => {
    if (event.keyCode === 27) {
      handleDismiss();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [])

  return (
    <Context.Provider
      value={{
        isOpen,
        nodeId,
        modalNode,
        setModalNode,
        onPresent: handlePresent,
        onDismiss: handleDismiss,
        setCloseOnOverlayClick,
      }}
    >
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {isOpen && (
            <ModalWrapper
              ref={animationRef}
              onAnimationStart={() => {
                const element = animationRef.current;
                if (!element) return;
                if (element.classList.contains("appear")) {
                  element.classList.remove("appear");
                  element.classList.add("disappear");
                } else {
                  element.classList.remove("disappear");
                  element.classList.add("appear");
                }
              }}
              {...animationMap}
              variants={animationVariants}
              transition={{ duration: 0.3 }}
            >
              <OverlayLayout onClick={handleOverlayDismiss} />
              {React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                  onDismiss: handleDismiss,
                  isOpen,
                })}
            </ModalWrapper>
          )}
        </AnimatePresence>
      </LazyMotion>
      {children}
    </Context.Provider>
  );
};

export default ModalProvider;