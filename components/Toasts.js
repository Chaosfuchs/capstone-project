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
  font-size: 15px;
  color: black;

  div {
    ${({ theme }) =>
      css`
        background-color: ${theme.colors.background};
      `};
    margin: 50px;
    text-align: center;
    padding: 20px;
    border: 2px solid black;
    border-radius: 10px;
  }
`;
