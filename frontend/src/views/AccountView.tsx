import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledAccountView = styled.main`
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
  margin: 0 auto;`;

export default function AccountView() {
  const profile: any = localStorage.getItem('profile') || null;
  const token: any = profile ? JSON.parse(profile).token : '';
  const [data, setData] = useState([])
  async function getData() {

    await fetch(`/adoptions`, {})
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        if(JSON.parse(profile).shelter) data = data.filter((e: any) => e.shelterName === JSON.parse(profile).result.name);
        else data = data.filter((e: any) => e.userMail === JSON.parse(profile).result.email);
        setData(data);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <StyledAccountView>
    {JSON.parse(profile).shelter ? <h1>Stworzone adopcje</h1> : <h1>Moje adopcje</h1>}
    {data.map((e: any) => {
        return (
          <div>
            <h2>{e.name}</h2>
            <img className="adoption_image" src={e.image} alt="" />
            {JSON.parse(profile).shelter ? <p>{e.userMail}</p> : <p>{e.shelterName}</p>}
            <p>{e.description}</p>
          </div>
        );})}
    
    </StyledAccountView>
  );
}
