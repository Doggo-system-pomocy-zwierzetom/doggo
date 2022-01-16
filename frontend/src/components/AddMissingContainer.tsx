import styled from 'styled-components';
import '@tensorflow/tfjs-backend-webgl';
// import { classes } from '../classes';
import { useState } from 'react';
import UploadImage from './UploadImage';
import { Card, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const StyledAddMissingContainer = styled.div`
  /* padding: 2rem; */
  /* background: white; */
  /* border-radius: 0.2rem; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: flex-start; */
  /* h1 {
    margin: 0;
  } */
`;

function AddMissingContainer({ setIsAddMissingClicked }: any) {

  const profile: any = localStorage.getItem('profile') || null;
  const token: any = profile ? JSON.parse(profile).token : '';
  const [missing, setMissing] = useState({
    title:'',
    creator: JSON.parse(profile).result.email,
    time: new Date(),
    image: '',
    description: '',
    place:'',
    latitude: 50.80191424187456,
    longtitude: 19.096500098574999
    });
    function resetValues(){
      setMissing({title:'',
      creator: JSON.parse(profile).result.email,
      time: new Date(),
      image: '',
      description: '',
      place:'',
      latitude: 50.80191424187456,
      longtitude: 19.096500098574999})
    }
    function handleSubmit(){
      if(profile){
        axios
        .post(
          '/missings',
        
          missing
          ,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(function (response) {
          // console.log(response);
        });
      }
    }
  // const [confirmedImg, confirmImg] = useState(true);

  // const handleUpload = async (e: any) => {
  //   // const mobilenet = require('@tensorflow-models/mobilenet');
  //   var img = e.target.files[0];
  //   var image: any = document.createElement('img');
  //   image.src = URL.createObjectURL(img);

  //   // const model = await mobilenet.load();
  //   // const prediction = await model.classify(image);

  //   // const found = prediction.some((item: any) => classes.includes(item.className));
  //   // confirmImg(found);
  // };

  return (
    <StyledAddMissingContainer>
      {/* <Card>
        <Card.Header>
          <Card.Title> Zgłaszanie zaginięcia </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text></Card.Text>

          <Form onSubmit={()=>handleSubmit()}>
            <Form.Label htmlFor="title">Tytuł</Form.Label>
            <Form.Control id="title" type="text"  onChange={(e)=>setMissing({...missing, title:e.target.value})} required />
            <Form.Label htmlFor="desc">Opis</Form.Label>
            <Form.Control id="desc" type="text" onChange={(e)=>setMissing({...missing, description:e.target.value})} required />
            <Form.Label htmlFor="place">Adres</Form.Label>
            <Form.Control id="place" type="text" onChange={(e)=>setMissing({...missing, place:e.target.value})} required />
            <Form.Label htmlFor="image">Zdjęcie</Form.Label>
            <Form.Control id="image" type="text" onChange={(e)=>setMissing({...missing, image:e.target.value})} required />
             <UploadImage />
            <Form.Group>
              <Button type="submit">Wyślij zgłoszenie</Button>
              <Button variant="secondary" onClick={()=>resetValues()}>
                Anuluj
              </Button>
            </Form.Group>
          </Form>
          //<input id="missingImg" type="file" onChange={(e) => handleUpload(e)} required /> 
          //{!confirmedImg ? (<p>Nieprawidłowe zdjęcie, upewnij się, że znajduje się na nim odpowiednie zwierzę</p>) : ''} 
          //<div><button type="submit" disabled={!confirmedImg}>Wyślij zgłoszenie</button> </div>
        </Card.Body>
      </Card> */}
    </StyledAddMissingContainer>
  );
}
export default AddMissingContainer;
