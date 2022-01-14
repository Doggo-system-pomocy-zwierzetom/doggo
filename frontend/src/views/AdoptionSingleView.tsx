import styled from 'styled-components';
import { useParams } from 'react-router';
import axios from 'axios';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StyledAdoptionSingleView = styled.main`
  /* display: flex; */
  /* margin: 0 auto; */

  /* justify-content: space-between; */
  /* flex-direction: column; */
  /* justify-content: stretch; */
  background: #ccc;
  /* margin: 1rem 3vw; */
  /* padding: 1rem; */
  /* min-height: 10rem; */
  /* gap: 1rem; */
  /* text-align: start; */

  .adoption_image {
    max-width: 500px;
    max-height: 500px;
    height: 100%;
    width: 100%;
    margin: auto 0;
  }
  .adoption_info {
    /* width: 100%; */
  }

  .animal-name {
    font-size: 1.2em;
    font-weight: 600;
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
      <h1>{name}</h1>
      <img className="adoption_image" src={image} alt="" />
      <div className="adoption_info">
        <p>{description}</p>
      </div>
      {JSON.parse(profile)?.shelter === false && !userMail? <button onClick={()=>addUser()}>Zgłoś chęć adopcji</button> 
      : (JSON.parse(profile)?.shelter === false ? 'Ktoś już jest zainteresowany adopcją' : '')}
      <Link className="link-more-info" to={`/adoptuj/`}>
          Powrót
      </Link>
    </StyledAdoptionSingleView>
  );
}
