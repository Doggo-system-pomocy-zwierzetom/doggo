import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledMyMissingsView = styled.main`
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

  .missing_image {
    max-width: 400px;
    max-height: 200px;
    margin: auto 0;
  }
  .amissing_info {
    /* width: 100%; */
  }

  .animal-name {
    font-size: 1.2em;
    font-weight: 600;
  }
  max-width: 800px;
  margin: 0 auto;`;

export default function MyMissingsView() {
  const profile: any = localStorage.getItem('profile') || null;
  const token: any = profile ? JSON.parse(profile).token : '';
  const [data, setData] = useState([])
  async function getData() {

    await fetch(`/missings`, {})
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        data = data.filter((e: any) => e.creator === JSON.parse(profile).result.email);
        setData(data);
      });
  }
  function deleteMissing(id:String){
    axios
    .delete(
      `/missings/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((res:any) => {
      getData();
      if (res.ok) {
        return res.json();
      }
    })
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <StyledMyMissingsView>
    <h1>Zgłoszone zaginięcia</h1>
    {data.map((e: any) => {
        return (
          <div key={e._id}>
            <h2>{e.title}</h2>
            <img className="missing_image" src={e.image} alt="" />
            <p>{e.time}</p>
            <p>{e.description}</p>
            <p>{e.place}</p>
            <button onClick={()=>deleteMissing(e._id)}>Usuń zgłoszenie</button>
          </div>
        );})}
    
    </StyledMyMissingsView>
  );
}
