import styled from 'styled-components';
import { useParams } from 'react-router';
import axios from 'axios';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StyledAdoptionSingleView = styled.main`
max-width: 1300px;
display: flex;
flex-direction: column;
box-shadow: 0 0 20px 0px var(--outline-darken);
border: 0.2rem solid var(--outline);
background: var(--white);


gap: 1rem;

padding: 4.6rem 3vw 1rem 3vw;

.header {
  background: var(--main);
  border-radius: 5px;
  margin-top: 2rem;
  width: 100%;
  color: var(--white);
    font-weight: 600;
    font-size: 2.5em;
    margin-bottom: 1rem;
    padding: 1rem 3rem;
}
  .adoption_image {
    max-width: 500px;
    max-height: 500px;
    height: 100%;
    width: 100%;
    margin: auto auto;
  }
  .adoption_info {
    /* width: 100%; */
    font-size: 1.1em;
    margin-top: 2rem;
  }

  .animal-name {
    font-size: 1.2em;
    font-weight: 600;
  }
  .btn-more{
    float:left;
    margin-right: 1rem;
  }
  .btn-delete{
    float:left;
    width: fit-content;
    *{
      text-decoration: none;
      color: var(--white);
    }
    margin-left:0;
  }
  .red{
    color: var(--warning);
    font-size: 1.2em;
    font-weight: 700;
  }
  max-width: 800px;
  margin: 0 auto;
`;

export default function AdoptionSingleView() {
  const { id }: any = useParams();
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [userMail, setUserMail] = useState('');
  const [shelterName, setShelterName] = useState('');

  const profile: any = localStorage.getItem('profile') || null;
  const token: any = profile ? JSON.parse(profile).token : '';

  async function getData() {
    
    // await fetch(`/getRow/getAdoption.php?id=${id}`, {

    // axios.get('/adoptions').then((res) => console.log(res.data));
    // axios.get('/adoptions').then((res) => setData(res.data));

    // getData();

    await fetch(`/adoptions`, {})
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        data = data.filter((e: any) => e._id === id);
        console.log(data);

        setImage(data[0].image);
        setName(data[0].name);
        setDescription(data[0].description);
        setUserMail(data[0].userMail);
        setShelterName(data[0].shelterName);
      });
  }
  
  function addUser(){

    setUserMail(JSON.parse(profile).result.email);
    axios
    .patch(
      `/adoptions/${id}`, {id :id,
        name :name,
        userMail :JSON.parse(profile).result.email,
        shelterName :shelterName,
        image: image,
        description: description},
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((res:any) => {
      if (res.ok) return res.json();
    })
  }
  
  useEffect(() => {
    getData();
  }, [userMail]);
  return (
    <StyledAdoptionSingleView>
      <h1 className="header">{name}</h1>
      <img className="adoption_image" src={image} alt="" />
      <div className="adoption_info">
        <p>{description}</p>
      </div>
      <div className="buttons">
      {JSON.parse(profile)?.shelter === false && !userMail ? <button className="btn-more" onClick={()=>addUser()}>Zgłoś chęć adopcji</button> 
      : (JSON.parse(profile)?.shelter === false && userMail!==JSON.parse(profile).result.email ? <p className="red">Ktoś już jest zainteresowany adopcją</p> : 
      (userMail===JSON.parse(profile).result.email ? <p className="red">Zgłosiłeś chęć adopcji</p> : ''))}
      <button className='btn-delete'><Link className="link-more-info" to={`/adoptuj/`}>
          Powrót
      </Link></button></div>
    </StyledAdoptionSingleView>
  );
}
