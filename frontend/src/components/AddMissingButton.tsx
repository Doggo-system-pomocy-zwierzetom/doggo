import styled from 'styled-components';
const StyledAddMissingButton = styled.button`
  padding: 1rem 2rem;
  background: #ff2323;
  border-radius: 0.2rem;
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  color: #fff;
`;
function AddMissingButton({ setIsAddMissingClicked }: any) {
  return (
    <StyledAddMissingButton onClick={() => setIsAddMissingClicked(true)}>
      Zgłoś zaginięcie
    </StyledAddMissingButton>
  );
}
export default AddMissingButton;
