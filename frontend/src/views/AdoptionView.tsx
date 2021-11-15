import AdoptionContainer from '../components/AdoptionContainer';
import styled from 'styled-components';
const StyledAdoptionView = styled.div``;

export default function AdoptionView() {
  return (
    <StyledAdoptionView>
      <h1>Adoptuj</h1>
      <AdoptionContainer />
    </StyledAdoptionView>
  );
}
