import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import pin from '../img/pin-green.svg';

const StyledAdoptionContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: stretch;
  background: var(--white);
  box-shadow: 0 0 20px -5px var(--outline-darken);
  border: 0.1rem solid var(--outline);

  margin: 1rem 0;
  padding: 1.5rem 1.5rem 2rem 2rem;
  min-height: 10rem;
  gap: 2rem;
  border-radius: 7px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  .adoption_info {
    text-align: start;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .description {
        max-height: 7.95rem;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .image {
      max-width: 16rem;
      max-height: 16rem;
      /* height: 100%;
      width: 100%; */
      margin: auto 0;
      border-radius: 6px;
      object-fit: contain;
      /* border-radius: 3px; */
      background: #e6e6e6;
      border: 2px solid #dddddd;
    }
    img {
      width: 30rem;
      height: 40rem;
    }
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
    clear: both;
  }

  .shelter {
    margin-top: auto;
    color: var(--main);
    font-weight: 600;
    &::before {
      content: '';
      background: url(${pin}) no-repeat;
      width: 1.4em;
      height: 1.4em;
      background-size: contain;
      float: left;
      margin-right: 0.2em;
    }
  }

  .btn-more {
    font-size: 1.1em;
    padding: 0.7em 1.5em;
    margin-left: 1.5rem;
  }
`;

export default function AdoptionContainer({ id, name, description, image, shelterName, userMail }: any) {
  const profile: any = localStorage.getItem('profile') || null;
  const token: any = profile ? JSON.parse(profile).token : '';
  function deleteAdoption(id: String) {
    axios.delete(`/adoptions/${id}`, { headers: { Authorization: `Bearer ${token}` } }).then((res: any) => {
      if (res.ok) return res.json();
    });
  }

  return (
    <StyledAdoptionContainer>
      {/* <img className="adoption_image" src={`data:image/png;base64, ${image}`} alt="" /> */}
      <div className="adoption_info">
        <div className="info">
          <p className="animal-name">{name}</p>
          <p className="description">{description}</p>
          <p className="shelter">{shelterName}</p>

          <Link className="btn-more" to={`/adoptuj/${id}`}>
            Szczegóły
          </Link>

          {JSON.parse(profile)?.result.name === shelterName && JSON.parse(profile).shelter ? (
            <button onClick={() => deleteAdoption(id)}>Usuń</button>
          ) : (
            ''
          )}
        </div>

        <img src={image} className="image" />
      </div>
    </StyledAdoptionContainer>
  );
}
