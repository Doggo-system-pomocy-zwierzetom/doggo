import { useContext, useEffect, useState } from 'react';
// import { MyContext } from '../contexts/MyContext';
import styled from 'styled-components';
import { Form, Button, Card } from 'react-bootstrap';
import { signin, signup } from '../actions/auth';
import { useDispatch } from 'react-redux';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { LoginInfoContext } from '../contexts/LoginInfoContextProvider';
import axios from 'axios';
import { emitKeypressEvents } from 'readline';
import dog from '../img/pngwing.com.png';

const StyledRegisterView = styled.main`
  /* display: flex; */
  /* gap: 1rem; */
  max-width: 650px;
  display: flex;
  align-items: center;
  /* padding-left: 2rem; */
  /*form {
    display: flex;
  }*/
  .card {
    margin-top: 3.5rem;
    margin-left: auto;
    .card-body {
      h1 {
        text-align: center;
      }
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      input[type='checkbox'] {
        height: 1em;
        width: 1em;
        margin-right: 0.3rem;

        &:checked {
          background: var(--second);
        }
      }
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .register-button {
        margin-top: 1rem;
        background: var(--second);
        padding: 1rem;
        font-size: 1.2em;
        font-weight: 600;
        border: none;
      }
    }
    .link {
      text-align: center;
      a {
        color: var(--main);
      }
    }
  }
  .error-message {
    color: var(--warning);
    text-align: center;
    margin: 0;
  }
  .dog-image {
    max-height: 400px;
    /* margin-top: 15rem; */
    margin-right: 0;
    margin-left: -3px;
    /* position: relative; */
    /* z-index: 1; */
  }
`;

export default function RegisterView() {
  const [user, setUser] = useContext(LoginInfoContext);

  const initialUserState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
  const initialShelterState = { name: '', NIP: '', email: '', password: '', confirmPassword: '' };
  const [formUserData, setFormUserData] = useState(initialUserState);
  const [formShelterData, setFormShelterData] = useState(initialShelterState);
  const [ifShelter, setIfShelter] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const handleSubmitUser = (e: any) => {
    e.preventDefault();
    axios
      .post('/user/signup', formUserData)
      .then((res) => {
        console.log(res);
        if (res.status !== 200) throw new Error('Error');
        setErrorMessage('');
        return res;
      })
      .then((res: any) => {
        localStorage.setItem('profile', JSON.stringify(res.data));
        const profile: any = localStorage.getItem('profile') || null;
        setUser(JSON.parse(profile));
        history.push('/');
        console.log(res);
      })
      .catch(function (error) {
        setErrorMessage('Coś poszło nie tak...');
        //console.log(error);
      });
  };
  const handleSubmitShelter = (e: any) => {
    e.preventDefault();
    axios
      .post('/user/signupShelter', formShelterData)
      .then((res) => {
        console.log(res);
        if (res.status !== 200) throw new Error('Error');
        setErrorMessage('');
        return res;
      })
      .then((res: any) => {
        localStorage.setItem('profile', JSON.stringify(res.data));
        const profile: any = localStorage.getItem('profile') || null;
        setUser(JSON.parse(profile));
        history.push('/');
      })
      .catch(function (error) {
        setErrorMessage('Coś poszło nie tak...');
        // console.log(error);
      });
  };
  const handleUserChange = (e: any) => {
    setFormUserData({ ...formUserData, [e.target.name]: e.target.value });
  };
  const handleShelterChange = (e: any) => {
    setFormShelterData({ ...formShelterData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    ifShelter ? setFormShelterData(initialShelterState) : setFormUserData(initialUserState);
  }, [ifShelter]);
  return (
    <>
      {user ? (
        history.push('/')
      ) : (
        <StyledRegisterView>
          <Card>
            <Card.Body>
              {/* <h1>Rejestracja{ifShelter ? ' schroniska' : ' użytkownika'}</h1> */}
              <h1>Rejestracja</h1>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              {/* <p className="registration-type"> */}
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={ifShelter}
                  onChange={() => setIfShelter(!ifShelter)}
                  id="check"
                />
                <label htmlFor="check">Chcę utworzyć konto jako schronisko.</label>
              </div>

              {/* </p> */}
              {/* <button
                onClick={() => {
                  setIfShelter(false);
                  setFormUserData(initialUserState);
                }}
              >
                Użytkownik
              </button>
              <button
                onClick={() => {
                  setIfShelter(true);
                  setFormShelterData(initialShelterState);
                }}
              >
                Schronisko
              </button> */}
              {ifShelter ? (
                <Form onSubmit={handleSubmitShelter}>
                  <Form.Control
                    value={formShelterData.name}
                    name="name"
                    placeholder="Nazwa"
                    onChange={handleShelterChange}
                  />
                  <Form.Control
                    value={formShelterData.NIP}
                    name="NIP"
                    placeholder="NIP"
                    onChange={handleShelterChange}
                  />

                  <Form.Control
                    value={formShelterData.email}
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    onChange={handleShelterChange}
                  />
                  <Form.Control
                    value={formShelterData.password}
                    name="password"
                    placeholder="Hasło"
                    type="password"
                    onChange={handleShelterChange}
                  />

                  <Form.Control
                    value={formShelterData.confirmPassword}
                    name="confirmPassword"
                    placeholder="Potwierdź hasło"
                    type="password"
                    onChange={handleShelterChange}
                  />
                  <Button className="register-button" type="submit">
                    Zarejestruj się
                  </Button>
                  {/* <p className="link">
                    Posiadasz już konto?
                    <Link to="/logowanie">Zaloguj się</Link>
                  </p> */}
                </Form>
              ) : (
                <Form onSubmit={handleSubmitUser}>
                  <Form.Control
                    value={formUserData.firstName}
                    name="firstName"
                    placeholder="Imię"
                    onChange={handleUserChange}
                  />
                  <Form.Control
                    value={formUserData.lastName}
                    name="lastName"
                    placeholder="Nazwisko"
                    onChange={handleUserChange}
                  />

                  <Form.Control
                    value={formUserData.email}
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    onChange={handleUserChange}
                  />
                  <Form.Control
                    value={formUserData.password}
                    name="password"
                    placeholder="Hasło"
                    type="password"
                    onChange={handleUserChange}
                  />

                  <Form.Control
                    value={formUserData.confirmPassword}
                    name="confirmPassword"
                    placeholder="Potwierdź hasło"
                    type="password"
                    onChange={handleUserChange}
                  />
                  <Button className="register-button" type="submit">
                    Zarejestruj się
                  </Button>
                </Form>
              )}
              <p className="link">
                {'Posiadasz już konto? '}
                <Link to="/logowanie">Zaloguj się</Link>
              </p>
            </Card.Body>
          </Card>
          <img className="dog-image" src={dog} alt="" />
        </StyledRegisterView>
      )}
    </>
  );
}

// export default function RegisterView() {
//   const { toggleNav, registerUser } = useContext(MyContext);
//   const initialState = {
//     userInfo: {
//       name: '',
//       email: '',
//       password: '',
//     },
//     errorMsg: '',
//     successMsg: '',
//   };
//   const [state, setState] = useState(initialState);

//   // On Submit the Registration Form
//   const submitForm = async (event: any) => {
//     event.preventDefault();
//     const data = await registerUser(state.userInfo);
//     if (data.success) {
//       setState({
//         ...initialState,
//         successMsg: data.message,
//       });
//     } else {
//       setState({
//         ...state,
//         successMsg: '',
//         errorMsg: data.message,
//       });
//     }
//   };

//   // On change the Input Value (name, email, password)
//   const onChangeValue = (e: any) => {
//     setState({
//       ...state,
//       userInfo: {
//         ...state.userInfo,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   // Show Message on Success or Error
//   let successMsg: any = '';
//   let errorMsg: any = '';
//   if (state.errorMsg) {
//     errorMsg = <div className="error-msg">{state.errorMsg}</div>;
//   }
//   if (state.successMsg) {
//     successMsg = <div className="success-msg">{state.successMsg}</div>;
//   }

//   return (
//     <div className="_loginRegister">
//       <h1>Sign Up</h1>
//       <form onSubmit={submitForm} noValidate>
//         <div className="form-control">
//           <label>Full Name</label>
//           <input
//             name="name"
//             required
//             type="text"
//             value={state.userInfo.name}
//             onChange={onChangeValue}
//             placeholder="Enter your name"
//           />
//         </div>
//         <div className="form-control">
//           <label>Email</label>
//           <input
//             name="email"
//             required
//             type="email"
//             value={state.userInfo.email}
//             onChange={onChangeValue}
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="form-control">
//           <label>Password</label>
//           <input
//             name="password"
//             required
//             type="password"
//             value={state.userInfo.password}
//             onChange={onChangeValue}
//             placeholder="Enter your password"
//           />
//         </div>
//         {errorMsg}
//         {successMsg}
//         <div className="form-control">
//           <button type="submit">Sign Up</button>
//         </div>
//       </form>
//       <div className="_navBtn">
//         <button onClick={toggleNav}>Login</button>
//       </div>
//     </div>
//   );
// }
