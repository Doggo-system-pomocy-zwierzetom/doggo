import styled from 'styled-components';
import { Button } from 'react-bootstrap';

type Props = {
  background: string;
};

const StyledMissingContainerElement = styled.div<Props>`
  display: flex;
  gap: 1rem;
  margin: 0.2rem 0;
  /* background: #dfdfdf; */
  background:${(props) => props.background || 'red'};
 
  border-radius: 0.2rem;
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
function MissingContainerElement({ data, index, selectedItem, setSelectedItem, setCordinates }: any) {
  return (
    <StyledMissingContainerElement
      background={`${selectedItem === index && '#dfdfdf'}`}
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
        <button className="btn-more">Szczegóły</button>
        {/* <Button></Button> */}
      </div>
    </StyledMissingContainerElement>
  );
}
export default MissingContainerElement;
