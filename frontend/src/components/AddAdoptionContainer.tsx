import styled from 'styled-components';
import { useEffect, useState } from 'react';
import UploadImage from './UploadImage';
import { Card, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const StyledAddAdoptionContainer = styled.div`
  background: var(--white);
  width: 800px;
  margin: auto;
  margin-top: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-shadow: 0 0 20px -5px var(--outline-darken);
  border: 0.1rem solid var(--outline);
  border-radius: 8px;
  .card {
    max-width: 700px;
    margin: auto;
  }
  .btn-delete {
    margin-top: 2rem;
  }
  .btn-more {
    margin-top: 2rem;
  }
`;

function AddAdoptionContainer({ setIsAddMissingClicked }: any) {
  const [imagePreview, setImagePreview] = useState<any>('');
  const [file, setFile] = useState<string>('');
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
    name: '',
    userMail: '',
    shelterName: JSON.parse(profile).result.name,
    image: '',
    description: '',
  });

  function handleSubmit() {
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

  const photoUpload = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();
    const file2 = e.target.files[0];
    // console.log('reader', reader);

    if (reader !== undefined && file2 !== undefined) {
      reader.onloadend = () => {
        console.log(file);

        setFile(file2);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file2);
    }
  };

  async function saveImageToServer(file: any) {
    console.log(file);
    await fetch('https://api.imgur.com/3/image', {
      //mode: 'cors',
      method: 'POST',
      headers: {
        Authorization: 'Client-ID e938cb3d41df2b6',
      },
      body: file,
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          // console.log(response);
          return response.json();
        }
      })
      .then((json) => {
        // console.log(json);
        console.log(json.data.link);
        setAdoption({ ...adoption, image: json.data.link });
      })
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  }

  const onFileSubmit = (e: any) => {
    e.preventDefault();
    if (file !== '') saveImageToServer(file);
    else console.log('Nie wybrano pliku!');
  };

  useEffect(() => {
    handleSubmit();
  }, [adoption.image]);

  return (
    <StyledAddAdoptionContainer>
      <Card className="card">
        <Card.Header>
          <Card.Title> Zgłaszanie adopcji </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text></Card.Text>

          <Form onSubmit={(e) => onFileSubmit(e)}>
            <Form.Label htmlFor="name">Imie</Form.Label>
            <Form.Control
              id="name"
              type="text"
              onChange={(e) => setAdoption({ ...adoption, name: e.target.value })}
              required
            />
            <Form.Label htmlFor="description">Opis</Form.Label>
            <Form.Control
              id="description"
              type="text"
              as="textarea"
              rows={3}
              onChange={(e) => setAdoption({ ...adoption, description: e.target.value })}
              required
            />
            <Form.Label htmlFor="image">Zdjęcie</Form.Label>
            {imagePreview !== '' && (
              <img className="image-preview" src={imagePreview} alt="Podgląd zdjęcia" />
            )}

            <Form.Control
              type="file"
              name="avatar"
              id="file"
              accept=".jpef, .png, .jpg"
              onChange={photoUpload}
              src={imagePreview}
            />
            {/* <Form.Control
              id="image"
              type="text"
              onChange={(e) => setAdoption({ ...adoption, image: e.target.value })}
              required
            /> */}
            <Form.Group>
              <Button className="btn-more" type="submit">
                Wyślij zgłoszenie
              </Button>
              <Button className="btn-delete" onClick={() => setIsAddMissingClicked(false)}>
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
