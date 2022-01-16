import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const StyledShelterContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: stretch;
  background: var(--white);
  box-shadow: 0 0 20px -5px var(--outline-darken);
  border: 0.1rem solid var(--outline);

  margin: 1rem 0;
  padding: 1rem;
  min-height: 10rem;
  gap: 2rem;
  border-radius: 7px;

  .shelter_image {
    max-width: 10rem;
    max-height: 10rem;
    height: 100%;
    width: 100%;
    margin: auto 0;
    border-radius: 7px;
  }
  .shelter_info {
    text-align: start;
    width: 100%;
  }

  .shelter-name {
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

export default function ShelterContainer( {name, email, food, equipment}: any) {
  
  return (
    <StyledShelterContainer>
      {/* <img className="adoption_image" src={`data:image/png;base64, ${image}`} alt="" /> */}
      <div className="shelter_info">
        <p className="shelter-name">{name}</p>
        <p>{email}</p>
        <h5>Zapotrzebowanie na żywność</h5>
        <p>{food}</p>
        <h5>Potrzebne wyposażenie</h5>
        <p>{equipment}</p>
        
      </div>
    </StyledShelterContainer>
  );
}
