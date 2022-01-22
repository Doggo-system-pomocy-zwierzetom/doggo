import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import bone from '../img/bone.svg';
import house from '../img/house.png';

const StyledShelterContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: stretch;
  background: var(--white);
  box-shadow: 0 0 20px -5px var(--outline-darken);
  border: 0.1rem solid var(--outline);

  margin: 1rem 0;
  padding: 1rem 2rem 2rem 2rem;
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
  .needs-container {
    margin-top:1.5rem;
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    .food-container {
      background: var(--main-01);
      h5 {
        &::before {
          content: '';
          background: url(${bone}) no-repeat;
          width: 1.6em;
          height: 1.5em;
          background-size: contain;
          float: left;
          margin-right: 0.4em;
          margin-top:0.25em;
        }
      }
    }
    .tools-container {
      background: var(--warning-01);
      h5 {
        &::before {
          content: '';
          background: url(${house}) no-repeat;
          width: 1.5em;
          height: 1.5em;
          background-size: contain;
          float: left;
          margin-right: 0.4em;
        }
    }
  }
  .food-container,
  .tools-container {
    width: calc(50% - 1rem);
    min-width: 250px;
    padding: 1rem 1.3rem 0.3rem 1.3rem;
    border-radius: 5px;
    h5{
      /* margin:1rem; */
      font-weight: 600;
    }
    p{
      padding-left:2.4em;
    }
  }
`;

export default function ShelterContainer({ name, email, food, equipment }: any) {
  return (
    <StyledShelterContainer>
      {/* <img className="adoption_image" src={`data:image/png;base64, ${image}`} alt="" /> */}
      <div className="shelter_info">
        <p className="shelter-name">{name}</p>
        <p>{email}</p>
        <div className="needs-container">
          <div className="food-container">
            <h5>Zapotrzebowanie na żywność</h5>
            <p>{food}</p>
          </div>
          <div className="tools-container">
            <h5>Potrzebne wyposażenie</h5>
            <p>{equipment}</p>
          </div>
        </div>
      </div>
    </StyledShelterContainer>
  );
}
