import styled from 'styled-components';
import axios from 'axios';

import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { signin, signup } from '../actions/auth';
import { Form, Button, Card } from 'react-bootstrap';
import { LoginInfoContext } from '../contexts/LoginInfoContextProvider';
import dogImage from '../img/dog-login.png';

const StyledLoginView = styled.main`
  max-width: 350px;
  margin: 0 auto;
  .link {
    cursor: pointer;
    text-align: center;
  }
  .image-dog {
    /* margin-top: 2rem;
    margin-bottom: -2rem; */
    max-width: 300px;
    position: relative;
    z-index: 1;
    margin: 2rem auto -2rem 2rem;
  }
  .card-body {
    padding: 1.5rem;
    gap: 1rem;
    .form-title {
      text-align: center;
    }
    form {
      margin: 1rem 0 0 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      button {
        margin-top: 1rem;
        background: var(--second);
        padding: 1rem;
        font-size: 1.2em;
        font-weight: 600;
        border: none;
      }
    }
    .register-link {
      color: var(--main);
    }
  }
`;

function LoginView() {
  const [user, setUser] = useContext(LoginInfoContext);

  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const initialState = { firstName: '', lastName: '', email: '', password: '', confirmpassword: '' };
  const [formData, setFormData] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    axios
      .post('/user/signin', formData)
      .then((res) => {
        console.log(res);
        if (res.status !== 200) throw new Error('Error');
        return res;
      })
      .then((res: any) => {
        localStorage.setItem('profile', JSON.stringify(res.data));

        console.log(localStorage.getItem('profile'));

        const profile: any = localStorage.getItem('profile') || null;

        setUser(JSON.parse(profile));
      })
      .then((res) => {})
      .catch(function (error) {
        setErrorMessage("Nieprawidłowy login lub hasło");
        console.log(error);
      });
  };
  const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      {user ? (
        <Redirect to="/" />
      ) : (
        <StyledLoginView>
          <img className="image-dog" src={dogImage} alt="" />
          <Card>
            <Card.Body>
              <h1 className="form-title">Logowanie</h1>
              
              <Form onSubmit={handleSubmit}>
                <Form.Control name="email" placeholder="E-mail" type="email" onChange={handleChange} />
                <Form.Control name="password" placeholder="Hasło" type="password" onChange={handleChange} />
                {errorMessage && (<p style={{color:"var(--warning)", fontWeight:"600"}}>{errorMessage}</p>)}
                <Button type="submit">Zaloguj się</Button>
                <p className="link">
                  Nie posiadasz konta?{' '}
                  <Link className="register-link" to="rejestracja">
                    Zarejestruj się
                  </Link>
                </p>
              </Form>
            </Card.Body>
          </Card>
        </StyledLoginView>
      )}
    </>
  );
}

export default LoginView;
