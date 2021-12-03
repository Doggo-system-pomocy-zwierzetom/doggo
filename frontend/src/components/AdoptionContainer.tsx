import styled from 'styled-components';

const StyledAdoptionContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: stretch;
  background: #ccc;
  margin: 1rem 3vw;
  padding: 1rem;
  min-height: 10rem;

  .adoption_image {
    max-width: 10rem;
    max-height: 10rem;
    height: 100%;
    width: 100%;
    margin: auto 1rem auto 0;
  }
  .adoption_info {
    width: 100%;
  }

  .animal-name {
    font-size: 1.2em;
    font-weight: 600;
  }
`;

export default function AdoptionContainer({ name, description, image }: any) {
  return (
    <StyledAdoptionContainer>
      <img className="adoption_image" src={`data:image/png;base64, ${image}`} alt="" />
      <div className="adoption_info">
        <p className="animal-name">{name}</p>
        <p>{description}</p>
      </div>
    </StyledAdoptionContainer>
  );
}
