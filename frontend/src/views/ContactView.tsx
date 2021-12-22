import styled from 'styled-components';

const StyledContactView = styled.main``;

export default function ContactView() {
  return (
    <StyledContactView>
      <h1>Napisz do nas</h1>
      <form>
        <label>Imię:</label>
        <input type="text" id="fname" name="fname" required />
        <label>E-mail:</label>
        <input type="email" id="fmail" name="fmail" required />
        <label>Wiadomość:</label>
        <input type="text" id="fcontent" name="fcontent" required />
        <button type="submit">Wyślij</button>
      </form>
    </StyledContactView>
  );
}
