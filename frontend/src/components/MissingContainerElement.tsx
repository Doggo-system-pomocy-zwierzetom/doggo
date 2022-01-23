import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

type Props = {
  background: string;
  outline: string;
};

const StyledMissingContainerElement = styled.div<Props>`
  padding-right: 1.3rem;
  display: flex;
  gap: 1.2rem;
  /* margin: 0.6rem auto; */
  width: 100%;
  /* max-width:min-content; */
  min-width: 0;
  /* background: #ddd; */
  background: ${(props) => props.background || 'red'};
  /* border: 0.07rem solid var(--card-outline); */
  outline: ${(props) => props.outline || ''};
  box-shadow: -2px 0 11px 0px var(--outline-darken);
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    height: 100%;
    /* height: min-content; */
  }

  border-radius: 5px;
  img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    /* border: 0.2rem solid var(--dark-grey); */

    border-radius: 5px 0 0 5px;
  }
  .info {
    min-width: 0;
    width: 100%;
    padding: 0.4rem 0 0.8rem 0;

    /* max-width:100% */
    display: flex;
    flex-direction: column;
    /* background:red; */
    /* width: 100%; */
    /* max-width: 100%; */
  }
  p {
    margin: 0;
  }
  .name {
    font-size: 1.4em;
    margin: 0;
  }

  .description {
    height: 100%;
  }
`;
function MissingContainerElement({ data, index, selectedItem, setSelectedItem, setCordinates }: any) {
  const profile: any = localStorage.getItem('profile') || null;
  const token: any = profile ? JSON.parse(profile).token : '';
  return (
    <StyledMissingContainerElement
      background={`${selectedItem === index ? 'var(--selected-item)' : 'var(--not-selected-item)'}`}
      outline={`${selectedItem === index ? 'var(--outline-selected)' : 'var(--outline)'}`}
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
        <p className="description">{data.time.substring(0,10) + " " + data.time.substring(11,16)}</p>
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
