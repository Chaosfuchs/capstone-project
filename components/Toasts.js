import React from 'react';
import styled, { css } from 'styled-components';
import useStore from '../hooks/useStore';
import { motion } from 'framer-motion';

const Toast = props => {
  const toasts = useStore(state => state.toasts);
  return (
    <>
      <NotificationContainer>
        {toasts
          .filter(toast => toast.shown)
          .map(toast => (
            <motion.div
              animate={{
                y: 100,
                scale: 1,
              }}
              key={toast.id}
            >
              <p>{toast.description}</p>
            </motion.div>
          ))}
      </NotificationContainer>
    </>
  );
};

export default Toast;

const NotificationContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  div {
    ${({ theme }) =>
      css`
        font-size: ${theme.fonts.fontSizeNormal};
        background-image: ${theme.gradient.layout};
      `};
    margin: 10px;
    padding: 5px;
    text-align: center;
    width: 200px;
    border: 2px solid black;
    border-radius: 10px;
  }
`;
