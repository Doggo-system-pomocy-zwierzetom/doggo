import { Card, Button, Form } from 'react-bootstrap';
import UploadImage from '../components/UploadImage';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const StyledMissingAddView = styled.main`
  max-width: 700px;
`;
export default function MissingAddView({ setIsAddMissingClicked }: any) {
  const profile: any = localStorage.getItem('profile') || null;
  const token: any = profile ? JSON.parse(profile).token : '';
  const history = useHistory();
  
  const [missing, setMissing] = useState({
    title:'',
    creator: JSON.parse(profile).result.email,
    time: new Date(),
    image: '',
    description: '',
    place:'',
    latitude: 50.82322792881221,
    longitude:  19.1250570957476
    });
    function resetValues(){
      setMissing({title:'',
      creator: JSON.parse(profile).result.email,
      time: new Date(),
      image: '',
      description: '',
      place:'',
      latitude: 50.82322792881221,
      longitude:  19.1250570957476})
    }
    function handleSubmit(e:any){
      e.preventDefault();
      if(profile){
        axios
        .post(
          '/missings',
        
          missing
          ,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(function (response) {
          console.log(response);
          history.push('/zaginiecia');
        });
      }
    }
    
  return (
    <StyledMissingAddView>
      <Card>
        <Card.Header>
          <Card.Title> Zgłaszanie zaginięcia </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text></Card.Text>

          <Form onSubmit={(e)=>handleSubmit(e)}>
            <Form.Label htmlFor="title">Tytuł</Form.Label>
            <Form.Control id="title" type="text" value={missing.title} onChange={(e)=>setMissing({...missing, title:e.target.value})} required />
            <Form.Label htmlFor="desc">Opis</Form.Label>
            <Form.Control id="desc" type="text" value={missing.description} onChange={(e)=>setMissing({...missing, description:e.target.value})} required />
            <Form.Label htmlFor="place">Adres</Form.Label>
            <Form.Control id="place" type="text" value={missing.place} onChange={(e)=>setMissing({...missing, place:e.target.value})} required />
            <Form.Label htmlFor="image">Zdjęcie</Form.Label>
            <Form.Control id="image" type="text" value={missing.image} onChange={(e)=>setMissing({...missing, image:e.target.value})} required />
            {/* <UploadImage /> */}
            <Form.Group>
              <Button type="submit">Wyślij zgłoszenie</Button>
              <Button variant="secondary" onClick={()=>resetValues()}>
                Anuluj
              </Button>
            </Form.Group>
          </Form>
          {/* <input id="missingImg" type="file" onChange={(e) => handleUpload(e)} required /> */}
          {/* {!confirmedImg ? (<p>Nieprawidłowe zdjęcie, upewnij się, że znajduje się na nim odpowiednie zwierzę</p>) : ''} */}
          <div>{/* <button type="submit" disabled={!confirmedImg}>Wyślij zgłoszenie</button> */}</div>
        </Card.Body>
      </Card>
    </StyledMissingAddView>
  );
}
