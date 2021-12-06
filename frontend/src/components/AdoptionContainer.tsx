import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledAdoptionContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: stretch;
  background: #ccc;
  margin: 1rem 3vw;
  padding: 1rem;
  min-height: 10rem;
  gap: 2rem;
  border-radius: 7px;

  .adoption_image {
    max-width: 10rem;
    max-height: 10rem;
    height: 100%;
    width: 100%;
    margin: auto 0;
    border-radius: 7px;
  }
  .adoption_info {
    text-align: start;
    width: 100%;
  }

  .animal-name {
    margin: 0;
    font-size: 1.4em;
    font-weight: 600;
  }

  .link-more-info {
    /* background: white; */
    /* padding: 0.7rem; */
    /* border-radius: 0.7px; */
  }
`;

export default function AdoptionContainer({ id, name, description, image }: any) {
  return (
    <StyledAdoptionContainer>
      <img className="adoption_image" src={`data:image/png;base64, ${image}`} alt="" />
      <div className="adoption_info">
        <p className="animal-name">{name}</p>
        <p>{description}</p>
        <Link className="link-more-info" to={`/adoptuj/${id}`}>
          Szczegóły
        </Link>
      </div>
    </StyledAdoptionContainer>
  );
}
