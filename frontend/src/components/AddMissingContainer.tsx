import styled from 'styled-components';
const StyledAddMissingContainer = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    margin: 0;
  }
`;
function AddMissingContainer({ setIsAddMissingClicked }: any) {
  return (
    <StyledAddMissingContainer>
      <h1>Zgłaszanie zaginięcia</h1>
      <label htmlFor="imie">Imie</label>
      <input id="imie" type="text" />
      <div>
        <button type="submit">Wyślij zgłoszenie</button>
        <button onClick={() => setIsAddMissingClicked(false)}>Anuluj</button>
      </div>
    </StyledAddMissingContainer>
  );
}
export default AddMissingContainer;
