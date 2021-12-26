import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type Props = {
  background: string;
};

const StyledMissingContainerElement = styled.div<Props>`
  display: flex;
  gap: 1rem;
  margin: 0.5rem auto;
  width: 100%;
  /* background: #dfdfdf; */
  background:${(props) => props.background || 'red'};
  border: 0.1rem solid var(--outline);
  box-shadow: 0 0 20px -5px var(--outline-darken);

 
  border-radius: 0.3rem;
  padding: 10px;
  img {
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    border-radius: 3px;
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
    /* cursor: pointer; */
    background: var(--second);
    color: var(--white);
    border: transparent;
    border-radius: 0.25rem;
    padding: 0.375rem 0.75rem;
    text-decoration:none;

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
function MissingContainerElement({ data, index, selectedItem, setSelectedItem, setCordinates }: any) {
  return (
    <StyledMissingContainerElement
      background={`${selectedItem === index && 'var(--selected-item)'}`}
      onClick={() => {
        setSelectedItem(index);
        setCordinates({
          center: {
            lat: data.latitude,
            lng: data.longitude,
          },
        });
      }}
    >
      <img src={`${data.photo}`} alt="Zdjęcie psa." />
      <div className="info">
        <p className="name">{data.name}</p>
        <p className="description">{data.description}</p>
        {/* <button className="btn-more">Szczegóły</button> */}
        <Link to={`/zaginiecia/${data.id}`} className="btn-more">
          Szczegóły
        </Link>

        {/* <Button></Button> */}
      </div>
    </StyledMissingContainerElement>
  );
}
export default MissingContainerElement;
