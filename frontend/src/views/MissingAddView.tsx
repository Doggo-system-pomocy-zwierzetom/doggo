import { Card, Button, Form } from 'react-bootstrap';
import UploadImage from '../components/UploadImage';
import styled from 'styled-components';

const StyledMissingAddView = styled.main`
  max-width: 700px;
`;
export default function MissingAddView() {
  return (
    <StyledMissingAddView>
      <Card>
        <Card.Header>
          <Card.Title> Zgłaszanie zaginięcia </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text></Card.Text>

          <Form>
            <Form.Label htmlFor="imie">Imie</Form.Label>
            <Form.Control id="imie" type="text" required />
            <UploadImage />
            <Form.Group>
              <Button type="submit">Wyślij zgłoszenie</Button>
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
