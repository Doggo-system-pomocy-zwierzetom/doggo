import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const StyledAdoptionContainer = styled.div`
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
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

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
    clear: both;
  }
`;

export default function AdoptionContainer({ id, name, description, image, shelterName, userMail}: any) {
  const profile: any = localStorage.getItem('profile') || null;
  const token: any = profile ? JSON.parse(profile).token : '';
  function deleteAdoption(id:String){
    axios
    .delete(
      `/adoptions/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((res:any) => {
      if (res.ok) return res.json();
    })
  }

  
  return (
    <StyledAdoptionContainer>
      {/* <img className="adoption_image" src={`data:image/png;base64, ${image}`} alt="" /> */}
      <div className="adoption_info">
        <div style={{float:"left"}}><p className="animal-name">{name}</p>
        <p>{description}</p>
        <p>{shelterName}</p>
        <button><Link className="link-more-info" to={`/adoptuj/${id}`}>
          Szczegóły
        </Link></button>{JSON.parse(profile)?.result.name===shelterName && JSON.parse(profile).shelter? <button onClick={()=>deleteAdoption(id)}>Usuń</button> : ''}</div>
        <div style={{float:"right"}}><img src={image} width="200px"/></div>
        
        
        
      </div>
    </StyledAdoptionContainer>
  );
}
