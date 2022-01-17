import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

type Props = {
  background: string;
};

const StyledMissingContainerElement = styled.div<Props>`
  display: flex;
  gap: 1rem;
  margin: 0.5rem auto;
  width: 100%;
  /* background: #ddd; */
  background:${(props) => props.background || 'red'};
  border: 0.07rem solid var(--card-outline);
  box-shadow: 0 0 20px -2px var(--outline-darken);

 
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
/* background:red; */
width: 100%;
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
  const profile: any = localStorage.getItem('profile') || null;
  const token: any = profile ? JSON.parse(profile).token : '';

  return (
    <StyledMissingContainerElement
      background={`${selectedItem === index ? 'var(--selected-item)' : 'var(--not-selected-item)'}`}
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
      <img src={`${data.image}`} alt="Zdjęcie psa." />
      <div className="info">
        <p className="name">{data.title}</p>
        <p className="description">{data.description}</p>
        {/* <button className="btn-more">Szczegóły</button> */}
        <Link to={`/zaginiecia/${data._id}`} className="btn-more">
          Szczegóły
        </Link>

        {/* <Button></Button> */}
      </div>
    </StyledMissingContainerElement>
  );
}
export default MissingContainerElement;
