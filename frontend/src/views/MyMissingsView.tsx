import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledMyMissingsView = styled.main`
.title{
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-weight: 700;
}
.red{
  color: var(--warning);
  font-weight: 700;
}
.adoption_info-red{
  box-shadow: 0 0 20px 0px var(--warning);
  border: 0.2rem solid var(--outline);
  display: flex;
  /* justify-content: space-between; */
  justify-content: stretch;
  background: var(--white);

  margin: 1rem 0;
  padding: 1.5rem 1.5rem 2rem 2rem;
  min-height: 10rem;
  gap: 2rem;
  border-radius: 7px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  .shelter{
    color: var(--warning);
  }
}
.adoption_info{
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
}
.image {
  max-width: 18rem;
  max-height: 15rem;
  /* height: 100%;
  width: 100%; */
  margin: 0 0;
  border-radius: 6px;
  object-fit: contain;
  /* border-radius: 3px; */
  //background: #e6e6e6;
  //border: 2px solid #dddddd;
}
img {
  width: 30rem;
  height: 40rem;
}
}
.info{
    text-align: start;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    
    }
    .animal-name {
      margin: 0;
      font-size: 1.6em;
      font-weight: 700;
    }
    .shelter {
      margin-top: 1em;
     color: var(--main);
     font-weight: 600;
     
   }
 
   .btn-delete {
     font-size: 1.1em;
     padding: 0.5em 1.5em;
     width: fit-content;
     margin-left: 0;
     float: left;
   }
   .btn-more {
    float: left;
    padding: 0.5em 1.5em;
    margin-left: 1rem;
    font-size: 1.1em;
   }
   
   `

export default function MyMissingsView() {
  const profile: any = localStorage.getItem('profile') || null;
  const token: any = profile ? JSON.parse(profile).token : '';
  const [data, setData] = useState([]);
  const history = useHistory();
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
  function daysFromToday(date:string):any{
    const today = new Date();
    const dateFormat = new Date(date);
    var diff = Math.abs(today.getTime() - dateFormat.getTime());
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays;
  }
  function addMissing(missing:any){
    missing.time = new Date();
    axios
        .patch(
          `/missings/${missing._id}`,

          missing,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(function (response) {
          console.log(response);
          history.push('/zaginiecia');
        });
  }
  return (
    <StyledMyMissingsView>
    <h1 className="title">Zgłoszone zaginięcia</h1>
    {data.map((e: any) => {
        return (
          <div className={daysFromToday(e.time)>30 ? "adoption_info-red" : "adoption_info"} key={e._id}>
            <div className="info">
            <h2 className="animal-name">{e.title}</h2> {daysFromToday(e.time)>30 ? <p className="red">(Zgłoszenie przedawnione)</p>: ''}
            <p className='shelter'>{e.time.substring(0,10) + " " + e.time.substring(11,16)}</p>
            <p className='description'>{e.description}</p>
            <p>{e.place}</p>
            <div>
            <button className="btn-delete" onClick={()=>deleteMissing(e._id)}>Usuń zgłoszenie</button>
            {daysFromToday(e.time)>30 ? <button className="btn-more" onClick={()=>addMissing(e)}>Zgłoś ponownie</button> : ''}</div>
            </div><img className="image" src={e.image} alt="" />
          </div>
        );})}
    
    </StyledMyMissingsView>
  );
}
