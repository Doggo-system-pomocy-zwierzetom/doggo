import styled from 'styled-components';
import { useEffect, useState } from 'react';
import UploadImage from './UploadImage';
import { Card, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const StyledAddAdoptionContainer = styled.div`
  /* padding: 2rem; */
  /* background: white; */
  /* border-radius: 0.2rem; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: flex-start; */
  /* h1 {
    margin: 0;
  } */
  .card{
    max_width: 600px;
  }
`;

function AddAdoptionContainer({ setIsAddMissingClicked }: any) {
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
  const profile: any = localStorage.getItem('profile') || null;
  const token: any = profile ? JSON.parse(profile).token : '';
  const [adoption, setAdoption] = useState({
    name:'',
    userMail:'',
    shelterName:JSON.parse(profile).result.name,
    image: '',
    description: ''});
    
  function handleSubmit(){
    axios
    .post(
      '/adoptions',
      {
        name: adoption.name,
        userMail: adoption.userMail,
        shelterName: adoption.shelterName,
        image: adoption.image,
        description: adoption.description,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(function (response) {
      // console.log(response);
    });
    setIsAddMissingClicked(false);
  }
  
  return (
    <StyledAddAdoptionContainer>
      <Card className="card">
        <Card.Header>
          <Card.Title> Zgłaszanie adopcji </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text></Card.Text>

          <Form onSubmit={()=>handleSubmit()}>
            <Form.Label htmlFor="name">Imie</Form.Label>
            <Form.Control id="name" type="text" onChange={(e)=>setAdoption({...adoption, name:e.target.value})} required />
            <Form.Label htmlFor="description">Opis</Form.Label>
            <Form.Control id="description" type="text" onChange={(e)=>setAdoption({...adoption, description:e.target.value})} required />
            <Form.Label htmlFor="image">Link do zdjęcia</Form.Label>
            <Form.Control id="image" type="text" onChange={(e)=>setAdoption({...adoption, image:e.target.value})} required />
            <Form.Group>
              <Button type="submit">Wyślij zgłoszenie</Button>
              <Button variant="secondary" onClick={() => setIsAddMissingClicked(false)}>
                Anuluj
              </Button>
            </Form.Group>
          </Form>
          {/* <input id="missingImg" type="file" onChange={(e) => handleUpload(e)} required /> */}
          {/* {!confirmedImg ? (<p>Nieprawidłowe zdjęcie, upewnij się, że znajduje się na nim odpowiednie zwierzę</p>) : ''} */}
          <div>{/* <button type="submit" disabled={!confirmedImg}>Wyślij zgłoszenie</button> */}</div>
        </Card.Body>
      </Card>
    </StyledAddAdoptionContainer>
  );
}
export default AddAdoptionContainer;
