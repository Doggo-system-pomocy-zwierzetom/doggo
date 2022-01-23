import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import pin from '../img/pin-green.svg';

const StyledAccountView = styled.main`
.title{
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-weight: 700;
}
.patch-title{
  cursor: pointer;
  font-weight: 700;
  font-size: 1.1em;
}
.patch-title:hover{
  color: var(--dark-grey2)
}
.form{
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  background: var(--white);
  box-shadow: 0 0 20px -5px var(--outline-darken);
  border: 0.1rem solid var(--outline);
  padding: 1.5rem 1.5rem 2rem 2rem;
  border-radius: 7px;
}
.form-input{
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
}
.form-input[name="food"]{
  margin-top: 2rem;
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
  // border: 2px solid #dddddd;
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
    gap: 2rem;
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
     padding: 0.5em 1.5em;
   }
.zapotrzebowanie{
  background: var(--white);
  box-shadow: 0 0 20px -5px var(--outline-darken);
  border: 0.1rem solid var(--outline);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  padding: 1.5rem 1.5rem 2rem 2rem;
  border-radius: 8px;
  span{
    font-weight: 700;
  }
}
  `;

export default function AccountView() {
  const profile: any = localStorage.getItem('profile') || null;
  const token: any = profile ? JSON.parse(profile).token : '';
  const [data, setData] = useState([])
  const [formData, setFormData] = useState({food:'', equipment:''})
  const [removedAdoption, setRemovedAdoption] = useState(false);
  const [showClicked, setShowClicked] = useState(false);
  async function getData() {

    fetch(`/adoptions`, {})
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        if(JSON.parse(profile).shelter) data = data.filter((e: any) => e.shelterName === JSON.parse(profile).result.name);
        else data = data.filter((e: any) => e.userMail === JSON.parse(profile).result.email);
        setData(data);
      });
  }
  function removeAdoption(e:any){
    axios
    .patch(
      `/adoptions/${e.id}`, {id :e.id,
        name :e.name,
        userMail :'',
        shelterName :e.shelterName,
        image: e.image,
        description: e.description},
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((res:any) => {
      if (res.ok) {
        return res.json();
        setRemovedAdoption(true);
      }
    })
  }
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
  useEffect(() => {
    getData();
  }, [removeAdoption, deleteAdoption]);

  function handleSubmit(e:any){
    e.preventDefault();
    let shelter = JSON.parse(profile).result;
    let id = JSON.parse(profile).result._id;
    console.log(formData);
    shelter.food = formData.food;
    shelter.equipment = formData.equipment;
    setShowClicked(false);
    setFormData({food:'', equipment:''});
    axios
    .patch(
      `/shelters/${id}`, {_id:id,
        name :shelter.name,
        email :shelter.email,
        NIP: shelter.NIP,
        password :shelter.password,
        food: shelter.food,
        equipment: shelter.equipment},
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((res:any) => {
      console.log(res);
      //setFormData({food:'', equipment:''});
      if (res.ok) return res.json();
    })
  }
  const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <StyledAccountView>
    {JSON.parse(profile).shelter ? 
    (<><h1 className="title">Zapotrzebowania</h1><div className="zapotrzebowanie"><p>Aktualne zapotrzebowanie na żywność: <span>{JSON.parse(profile).result.food}</span></p>
    <p>Potrzebne wyposażenie: <span>{JSON.parse(profile).result.equipment}</span></p></div><div className="form">
      
    <div className="patch-title" onClick={()=>setShowClicked(!showClicked)}>Zmień informacje o zapotrzebowaniach</div>{showClicked ?(
    <><Form onSubmit={handleSubmit}>
          <Form.Control as="textarea" rows={3}  className="form-input"  name="food" placeholder="Zapotrzebowanie na żywność" onChange={handleChange} />
          <Form.Control as="textarea" rows={3} className="form-input" name="equipment" placeholder="Potrzebne wyposażenie" onChange={handleChange} />
          <Button className="btn-more" type="submit">Zatwierdź</Button>
        </Form></>):''}</div>
      <h1 className="title">Stworzone adopcje</h1></>)
    : <h1 className="title">Moje adopcje</h1>}
    {data.map((e: any) => {
        return (
          <div className="adoption_info">
          <div className="info">
            <h2 className="animal-name">{e.name}</h2>
            {JSON.parse(profile).shelter ? <p>{e.userMail}</p> : <p className='shelter'>{e.shelterName}</p>}
            <p className='description'>{e.description}</p>
            {!JSON.parse(profile).shelter ? <button className="btn-more" onClick={()=>removeAdoption(e)}>Zrezygnuj</button> : <button className="btn-more" onClick={()=>deleteAdoption(e._id)}>Usuń</button>}
            </div>
            <img className="image" src={e.image} alt="" />
            </div>
        );})}
    
    </StyledAccountView>
  );
}
