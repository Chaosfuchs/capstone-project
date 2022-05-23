import useStore from '../hooks/useStore';
import styled from 'styled-components';

export default function ShowCharacter() {
  const characters = useStore(state => state.characters);

  return <StyledCard>{JSON.stringify(characters)}</StyledCard>;
}

const StyledCard = styled.div`
  ${({ theme }) => `background-color:  ${theme.colors.pastellgreen};
  box-shadow: ${theme.boxShadow.grey};`}
  display: flex;
  border: 2px solid black;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
`;
