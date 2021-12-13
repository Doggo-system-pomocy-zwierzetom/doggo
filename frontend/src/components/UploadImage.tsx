import { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';

const StyledUploadImage = styled.div`
  .image-preview {
    max-width: 100%;
    max-height: 300px;
  }
`;

export default function UploadImage({ setImageURL }: any) {
  const [file, setFile] = useState<string>('');
  const [imagePreview, setImagePreview] = useState<any>('');

  const onFileSubmit = (e: any) => {
    e.preventDefault();
    if (file !== '') saveToServer(file);
    else console.log('Nie wybrano pliku!');
  };

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

  function saveToServer(file: any) {
    console.log(file);

    fetch('https://api.imgur.com/3/image', {
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
          // alert('Image uploaded to album');
          // const url = JSON.parse(response).url;
          console.log(response);
          console.log('201');
          return response.json();
        }
      })
      .then((json) => {
        console.log(json);
        console.log(json.data.link);

        // insertToEditor(json.data.link);
      })
      .catch((error) => {
        console.error(error);
        //alert('Upload failed: ' + error);
      });
  }

  return (
    <StyledUploadImage>
      {imagePreview === '' ? (
        <Alert variant="info">wybierz zdjęcie</Alert>
      ) : (
        <img className="image-preview" src={imagePreview} alt="Podgląd zdjęcia" />
      )}
      {/* <form onSubmit={(e) => onFileSubmit(e)} onChange={(e) => onChange(e)}> */}
      <Form onSubmit={(e) => onFileSubmit(e)}>
        {/* <form onSubmit={(e) => saveToServer()} onChange={(e) => onChange(e)}> */}
        <Form.Control
          type="file"
          name="avatar"
          id="file"
          accept=".jpef, .png, .jpg"
          onChange={photoUpload}
          src={imagePreview}
        />
        <Button variant="secondary" type="submit">
          Wyślij
        </Button>
      </Form>
    </StyledUploadImage>
  );
}
