import styled from 'styled-components';

const StyledAdoptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: #ccc;

  .animal-name {
    font-size: 1.2em;
    font-weight: 600;
  }
`;

export default function AdoptionContainer() {
  return (
    <StyledAdoptionContainer>
      <p>Zdjęcie</p>
      <div className="">
        <p className="animal-name">imie</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis tenetur consequuntur,
          corporis vero eum adipisci dolore cumque vel beatae quis nesciunt temporibus numquam iusto eaque
          magni minus cum eligendi.
        </p>
      </div>
    </StyledAdoptionContainer>
  );
}
