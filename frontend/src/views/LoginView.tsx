import styled from 'styled-components';
import axios from 'axios';

import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { signin, signup } from '../actions/auth';
import { Form, Button } from 'react-bootstrap';
import { LoginInfoContext } from '../contexts/LoginInfoContextProvider';

const StyledLoginView = styled.main`
  max-width: 300px;
  margin: 0 auto;
  .link {
    cursor: pointer;
    text-align: center;
  }
`;

function LoginView() {
  const [user, setUser] = useContext(LoginInfoContext);

  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const initialState = { firstName: '', lastName: '', email: '', password: '', confirmpassword: '' };
  const [formData, setFormData] = useState(initialState);

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
          <h1>Logowanie</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Control name="email" placeholder="E-mail" type="email" onChange={handleChange} />
            <Form.Control name="password" placeholder="Hasło" type="password" onChange={handleChange} />

            <Button type="submit">Zaloguj się</Button>
            <p className="link">
              Nie posiadasz konta? <Link to="rejestracja">Zarejestruj się</Link>
            </p>
          </Form>
        </StyledLoginView>
      )}
    </>
  );
}

export default LoginView;