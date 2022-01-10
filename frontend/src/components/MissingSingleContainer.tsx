import styled from 'styled-components';
import { Button } from 'react-bootstrap';

type Props = {
  background: string;
};

const StyledMissingSingleContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0.2rem 0;
  /* background: #dfdfdf; */
  background: #fff;
 
  border-radius: 0.2rem;
  padding: 10px;
  img {
    width: 30rem;
    height: 40rem;
    object-fit: contain;
    border-radius: 3px;
    background:#000;
  }
  .info{
display:flex;
flex-direction:column;
  }
  p{
    margin:0;
  }
  .name {
    font-size: 1.5em;
    margin: 0;
  }
  .btn-more {
    margin: 0 auto;
    cursor: pointer;
    background: #0d6efd;
    color: #fff;
    border: transparent;
    border-radius: 0.25rem;
    padding: 0.375rem 0.75rem;

    &:hover {
      /* background: green; */
      /* transition: color .15s ease-in-out, background-color .15s ease-in-out,
      border-color .15s ease-in-out, box-shadow .15s ease-in-out; */
    }
}
  }
  .description{
    height:100%;
  }
`;
function MissingSingleContainer({ data }: any) {
  // console.log(data);

  return (
    <StyledMissingSingleContainer>
      <img src={`${data[0].image}`} alt="Zdjęcie psa." />
      <div className="info">
        <p className="name">{data[0].title}</p>
        <p className="description">{data[0].description}</p>
      </div>
    </StyledMissingSingleContainer>
  );
}
export default MissingSingleContainer;
