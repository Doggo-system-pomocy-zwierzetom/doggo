import styled from 'styled-components';
import '@tensorflow/tfjs-backend-webgl';
import {classes} from '../classes';
import { useState } from 'react';

const StyledAddMissingContainer = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    margin: 0;
  }
`;

function AddMissingContainer({ setIsAddMissingClicked }: any) {

  const [confirmedImg, confirmImg] = useState(true);

  const handleUpload = async (e:any) => {
    const mobilenet = require('@tensorflow-models/mobilenet');
    var img = e.target.files[0];
    var image:any = document.createElement('img');
    image.src = URL.createObjectURL(img);
  
    const model = await mobilenet.load();
    const prediction = await model.classify(image);
  
    const found = prediction.some((item: any) => classes.includes(item.className))
    confirmImg(found);
  }

  return (
    <StyledAddMissingContainer>
      <h1>Zgłaszanie zaginięcia</h1>
      <label htmlFor="imie">Imie</label>
      <input id="imie" type="text" required/>
      <input id="missingImg" type="file" onChange={(e) => handleUpload(e)} required/>
      {!confirmedImg ? (<p>Nieprawidłowe zdjęcie, upewnij się, że znajduje się na nim odpowiednie zwierzę</p>) : ''}
      <div>
        <button type="submit" disabled={!confirmedImg}>Wyślij zgłoszenie</button>
        <button onClick={() => setIsAddMissingClicked(false)}>Anuluj</button>
      </div>
    </StyledAddMissingContainer>
  );
}
export default AddMissingContainer;
