import styled from 'styled-components';
const StyledMissingContainerElement = styled.div`
  display: flex;
  margin: 0.2rem 0;
  background: #dfdfdf;
  border-radius: 0.2rem;
`;
function MissingContainerElement() {
  return (
    <StyledMissingContainerElement>
      <p>Zdjęcie</p>
      <p>Imie pieska, miejscowość</p>
    </StyledMissingContainerElement>
  );
}
export default MissingContainerElement;
