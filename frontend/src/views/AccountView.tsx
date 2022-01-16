import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
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
  const [formData, setFormData] = useState({food:'', equipment:''})
  const [removedAdoption, setRemovedAdoption] = useState(false);
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
    // console.log(shelter);
    // console.log(id);
    axios
    .patch(
      `/shelters/${id}`, {id :id,
        name :shelter.name,
        email :shelter.email,
        password :shelter.password,
        NIP: shelter.NIP,
        food: formData.food,
        equipment: formData.equipment},
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((res:any) => {
      console.log(res);
      setFormData({food:'', equipment:''});
      if (res.ok) return res.json();
    })
  }
  const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <StyledAccountView>
    {JSON.parse(profile).shelter ? 
    (<><Form onSubmit={handleSubmit}>
          <Form.Control name="food" placeholder="Zapotrzebowanie na żywność" onChange={handleChange} />
          <Form.Control name="equipment" placeholder="Potrzebne wyposażenie" onChange={handleChange} />
          <Button type="submit">Zatwierdź</Button>
        </Form><h1>Stworzone adopcje</h1></>)
    : <h1>Moje adopcje</h1>}
    {data.map((e: any) => {
        return (
          <div>
            <h2>{e.name}</h2>
            <img className="adoption_image" src={e.image} alt="" />
            {JSON.parse(profile).shelter ? <p>{e.userMail}</p> : <p>{e.shelterName}</p>}
            <p>{e.description}</p>
            {!JSON.parse(profile).shelter ? <button onClick={()=>removeAdoption(e)}>Zrezygnuj</button> : <button onClick={()=>deleteAdoption(e._id)}>Usuń</button>}
          </div>
        );})}
    
    </StyledAccountView>
  );
}
