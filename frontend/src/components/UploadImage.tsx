import { useState } from 'react';
import styled from 'styled-components';

const StyledUploadImage = styled.div`
  .image-preview {
    max-width: 100%;
    max-height: 400px;
  }
`;

export default function UploadImage({ setImageURL }: any) {
  const [file, setFile] = useState<string>('');
  const [imagePreview, setImagePreview] = useState<any>('');
  const [base64, setBase64] = useState<string>();
  // const [name, setName] = useState<string>();
  // const [size, setSize] = useState<string>();
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChange = (e: any) => {
    console.log('file', e.target.files[0]);
    let file = e.target.files[0];
    if (file) {
      setFile(file);
      // const reader = new FileReader();
      // reader.onload = _handleReaderLoaded;
      // reader.readAsBinaryString(file);
    }
  };

  // const _handleReaderLoaded = (readerEvt: any) => {
  //   let binaryString = readerEvt.target.result;
  //   setBase64(btoa(binaryString));
  // };

  const onFileSubmit = (e: any) => {
    // setIsLoading(true);
    e.preventDefault();
    // console.log('bine', base64);
    // let payload = { image: base64 };
    // console.log('payload', payload);
    if (file !== '') saveToServer(file);
    else console.log('Nie wybrano pliku!');
  };

  const photoUpload = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();
    const file2 = e.target.files[0];
    console.log('reader', reader);
    // console.log('file', file);
    if (reader !== undefined && file2 !== undefined) {
      reader.onloadend = () => {
        console.log(file);

        setFile(file2);
        // setSize(file.size);
        // setName(file.name);
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

  const remove = () => {
    setFile('');
    // setImagePreview('');
    // setBase64('');
    // setName('');
    // setSize('');
  };

  return (
    <StyledUploadImage>
      {imagePreview === '' ? (
        <p>wybierz zdjęcie</p>
      ) : (
        <img className="image-preview" src={imagePreview} alt="Podgląd zdjęcia" />
      )}
      <form onSubmit={(e) => onFileSubmit(e)} onChange={(e) => onChange(e)}>
        {/* <form onSubmit={(e) => saveToServer()} onChange={(e) => onChange(e)}> */}
        <input
          type="file"
          name="avatar"
          id="file"
          accept=".jpef, .png, .jpg"
          onChange={photoUpload}
          src={imagePreview}
        />
        {/* {imagePreview !== '' && <button type="submit">{isLoading ? <p>ładowanie</p> : <>Wyślij</>}</button>} */}
        {/* {imagePreview !== '' && <button type="submit">Wyślij</button>} */}
        <button type="submit">Wyślij</button>
        <button>Anuluj</button>
      </form>
    </StyledUploadImage>
  );
}
