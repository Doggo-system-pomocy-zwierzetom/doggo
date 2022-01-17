import { Card, Button, Form } from 'react-bootstrap';
import UploadImage from '../components/UploadImage';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormMap from '../components/FormMap';

const StyledMissingAddView = styled.main`
  max-width: 1000px;
  width: 90vw;
  padding-top: 6rem;
  /* min-width: 1000px; */
  height: 100vh;
  max-height: 700px;
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  .card {
    min-width: 300px;
  }

  .pin {
    width: 5rem;
    height: 5rem;
    /* background: red; */
    position: absolute;
    top: -5rem;

    left: -2.5rem;
    /* cursor: pointer; */
    /* &.selected {
      width: 10rem;
      height: 10rem;
      padding: 0 4rem 5rem 1rem;
    } */
  }
  @media (max-width: 800px) {
    flex-wrap: wrap;
    .card {
      width: 100%;
    }
  }
`;
export default function MissingAddView({ setIsAddMissingClicked }: any) {
  const profile: any = localStorage.getItem('profile') || null;
  const token: any = profile ? JSON.parse(profile).token : '';
  const history = useHistory();
  const [onClickLocation, setOnClickLocation] = useState({ lat: 50.8210857, lng: 19.0765357 });
  const [data, setData] = useState([{}]);
  const [defaultProps, setDefaultProps] = useState({
    center: {
      lat: 50.8210857,
      lng: 19.0765357,
    },
  });

  const [missing, setMissing] = useState({
    title: '',
    creator: JSON.parse(profile).result.email,
    time: new Date(),
    image: '',
    description: '',
    place: '',
    latitude: 50.82322792881221,
    longitude: 19.1250570957476,
  });
  function resetValues() {
    setMissing({
      title: '',
      creator: JSON.parse(profile).result.email,
      time: new Date(),
      image: '',
      description: '',
      place: '',
      latitude: 50.82322792881221,
      longitude: 19.1250570957476,
    });
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    // console.log(onClickLocation.lat, onClickLocation.lng);

    // setMissing({ ...missing, longitude: onClickLocation.lng, latitude: onClickLocation.lat });
    console.log(missing);

    if (profile) {
      axios
        .post(
          '/missings',

          missing,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(function (response) {
          console.log(response);
          // history.push('/zaginiecia');
        });
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setDefaultProps({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    });
  }, []);

  useEffect(() => {
    console.log(onClickLocation);
    setMissing({ ...missing, longitude: onClickLocation.lng, latitude: onClickLocation.lat });
  }, [onClickLocation]);

  return (
    <StyledMissingAddView>
      <Card>
        <Card.Header>
          <Card.Title> Zgłaszanie zaginięcia </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text></Card.Text>

          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Label htmlFor="title">Tytuł</Form.Label>
            <Form.Control
              id="title"
              type="text"
              value={missing.title}
              onChange={(e) => setMissing({ ...missing, title: e.target.value })}
              required
            />
            <Form.Label htmlFor="desc">Opis</Form.Label>
            <Form.Control
              id="desc"
              type="text"
              value={missing.description}
              onChange={(e) => setMissing({ ...missing, description: e.target.value })}
              required
            />
            <Form.Label htmlFor="place">Adres</Form.Label>
            <Form.Control
              id="place"
              type="text"
              value={missing.place}
              onChange={(e) => setMissing({ ...missing, place: e.target.value })}
              required
            />
            <Form.Label htmlFor="image">Zdjęcie</Form.Label>
            <Form.Control
              id="image"
              type="text"
              value={missing.image}
              onChange={(e) => setMissing({ ...missing, image: e.target.value })}
              required
            />
            {/* <UploadImage /> */}
            <Form.Label htmlFor="">Wybierz miejsce zaginięcia na mapie.</Form.Label>

            <Form.Group>
              <Button type="submit">Wyślij zgłoszenie</Button>
              <Button variant="secondary" onClick={() => resetValues()}>
                Anuluj
              </Button>
            </Form.Group>
          </Form>
          {/* <input id="missingImg" type="file" onChange={(e) => handleUpload(e)} required /> */}
          {/* {!confirmedImg ? (<p>Nieprawidłowe zdjęcie, upewnij się, że znajduje się na nim odpowiednie zwierzę</p>) : ''} */}
          <div>{/* <button type="submit" disabled={!confirmedImg}>Wyślij zgłoszenie</button> */}</div>
        </Card.Body>
      </Card>
      <FormMap
        props={defaultProps}
        data={data}
        setOnClickLocation={setOnClickLocation}
        onClickLocation={onClickLocation}
      />
    </StyledMissingAddView>
  );
}
