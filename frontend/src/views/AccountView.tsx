import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import pin from '../img/pin-green.svg';
// import bone from '../img/bone.svg';
import house from '../img/house.png';
import edit from '../img/edit.png';
import { Redirect} from 'react-router-dom';
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
  color: hsl(358deg 69% 40%);
  &::after {
    content: '';
    background: url(${edit}) no-repeat;
    width: 1.3em;
    height: 1.3em;
    background-size: contain;
    float: left;
    margin-right: 1em;
  }
}
.patch-title:hover{
  color: hsl(9.450381679389315, 49.778656126482204%, 47.6078431372549%)
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

export default function AccountView() {
  const profile: any = localStorage.getItem('profile') || null;
  const token: any = profile ? JSON.parse(profile).token : '';
  const [data, setData] = useState([])
  const [showClicked, setShowClicked] = useState(false);
  const [food, setFood] = useState('')
  const [equipment, setEquipment] = useState('')
  const [formData, setFormData] = useState({
    food: '',
    equipment: ''})
  async function getData() {

    fetch(`/adoptions`, {})
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        if(JSON.parse(profile)?.shelter) data = data.filter((e: any) => e.shelterName === JSON.parse(profile)?.result.name);
        else data = data.filter((e: any) => e.userMail === JSON.parse(profile)?.result.email);
        setData(data);
      });
  }
  async function getDataShelter() {

    fetch(`/shelters`, {})
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        data = data.filter((e: any) => e.name === JSON.parse(profile).result.name);
        console.log(data[0]);
        setFood(data[0].food);
        setEquipment(data[0].equipment);
        
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
    if(JSON.parse(profile)?.shelter) getDataShelter();
    getData();
  }, [removeAdoption, deleteAdoption]);



  function handleSubmit(e:any){
    e.preventDefault();
    let id = JSON.parse(profile).result._id;
    setShowClicked(false);
    axios
    .patch(
      `/shelters/${id}`, {food: formData.food, equipment:formData.equipment},
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((res:any) => {
      getDataShelter()
      if (res.ok) return res.json();
    }).catch((e:Error)=>{
      console.log(e);
    }
    )
  }
  const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <>{profile===null ? (
      <Redirect to="/logowanie" />
    ) : (
    <StyledAccountView>
    {JSON.parse(profile).shelter ? 
    (<><h1 className="title">Zapotrzebowania</h1>
    <div className="zapotrzebowanie">
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
    </div><div className="form">
      
    <div className="patch-title" onClick={()=>{setShowClicked(!showClicked); setFormData({food:food, equipment:equipment})}}>Zmień informacje o zapotrzebowaniach</div>{showClicked ?(
    <><Form onSubmit={handleSubmit}>
          <Form.Control as="textarea" rows={3}  className="form-input" value={formData.food} name="food" placeholder="Zapotrzebowanie na żywność" onChange={handleChange} />
          <Form.Control as="textarea" rows={3} className="form-input" value={formData.equipment} name="equipment" placeholder="Potrzebne wyposażenie" onChange={handleChange} />
          <Button className="btn-more" type="submit">Zatwierdź</Button>
          <Button className="btn-delete" onClick={()=>setShowClicked(false)}>Anuluj</Button>
        </Form></>):''}</div>
      <h1 className="title">Stworzone adopcje</h1></>)
    : <h1 className="title">Moje adopcje</h1>}
    {data.map((e: any) => {
        return (
          <div key={e._id} className="adoption_info">
          <div className="info">
            <h2 className="animal-name">{e.name}</h2>
            {JSON.parse(profile).shelter ? <p>{e.userMail}</p> : <p className='shelter'>{e.shelterName}</p>}
            <p className='description'>{e.description}</p>
            {!JSON.parse(profile).shelter ? <button className="btn-more" onClick={()=>removeAdoption(e)}>Zrezygnuj</button> : <button className="btn-more" onClick={()=>deleteAdoption(e._id)}>Usuń</button>}
            </div>
            <img className="image" src={e.image} alt="" />
            </div>
        );})}
    
    </StyledAccountView>)}
  </>);
}
