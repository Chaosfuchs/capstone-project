import styled, { css } from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function ButtonsForm() {
  return (
    <StyledButtonContainer>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="submit"
      >
        Save
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="reset"
      >
        Reset Form
      </motion.button>
    </StyledButtonContainer>
  );
}

export function ButtonsEdit() {
  return (
    <StyledButtonContainer>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="submit"
      >
        Update
      </motion.button>
      <Link passHref href="/characters">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Cancel
        </motion.button>
      </Link>
    </StyledButtonContainer>
  );
}

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  margin: 5px;
  padding: 5px;

  button {
    ${({ theme }) => css`
      font-size: ${theme.fonts.fontSizeButton};
      box-shadow: ${theme.boxShadow.shadowHeavy};
      background-color: ${theme.colors.button};
    `}
    border: 1px solid black;
    width: 140px;
    height: 50px;
    border-radius: 10px;
  }
`;
