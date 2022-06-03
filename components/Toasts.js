import React from 'react';
import styled, { css } from 'styled-components';
import useStore from '../hooks/useStore';

const Toast = props => {
  const toasts = useStore(state => state.toasts);
  return (
    <>
      <NotificationContainer>
        {toasts
          .filter(toast => toast.shown)
          .map(toast => (
            <div key={toast.id}>
              <p>{toast.description}</p>
            </div>
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
        background-color: ${theme.colors.card};
      `};
    margin: 10px;
    padding: 5px;
    text-align: center;
    width: 200px;
    border: 2px solid black;
    border-radius: 10px;
  }
`;
