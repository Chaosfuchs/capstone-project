import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useStore from '../hooks/useStore';

const Toast = props => {
  const toasts = useStore(state => state.toasts);

  return (
    <>
      <StyledNotificationContainer>
        {toasts
          .filter(toast => toast.shown)
          .map((toast, i) => (
            <div key={i}>
              <p>{toast.description}</p>
            </div>
          ))}
      </StyledNotificationContainer>
    </>
  );
};

export default Toast;

const StyledNotificationContainer = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  position: fixed;
  color: black;

  div {
    ${({ theme }) => `background-color:  ${theme.colors.fifth}`};
    margin: 50px;
    text-align: center;
    border: 2px solid black;
    border-radius: 10px;
  }
`;
