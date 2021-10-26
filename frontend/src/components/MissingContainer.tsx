import styled from 'styled-components';
import MissingContainerElement from './MissingContainerElement';
const StyledMissingContainer = styled.div`
  padding: 1rem;
  background: white;
  border-radius: 0.2rem;
`;
function MissingContainer() {
  return (
    <StyledMissingContainer>
      <p>Zaginione suczki w twojej okolicy XD</p>
      <div className="missing-catalog">
        <MissingContainerElement />
      </div>
    </StyledMissingContainer>
  );
}
export default MissingContainer;
