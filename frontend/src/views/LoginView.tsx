import styled from 'styled-components';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../actions/auth';
import { Form, Button } from 'react-bootstrap';
// import React, { useContext, useState } from 'react';
// import { MyContext } from '../contexts/MyContext';

// export default function LoginView() {
//   const { toggleNav, loginUser, isLoggedIn } = useContext(MyContext);

//   const initialState = {
//     userInfo: {
//       email: '',
//       password: '',
//     },
//     errorMsg: '',
//     successMsg: '',
//   };

//   const [state, setState] = useState(initialState);

//   // On change input value (email & password)
//   const onChangeValue = (e: any) => {
//     setState({
//       ...state,
//       userInfo: {
//         ...state.userInfo,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   // On Submit Login From
//   const submitForm = async (event: any) => {
//     event.preventDefault();
//     const data = await loginUser(state.userInfo);
//     if (data.success && data.token) {
//       setState({
//         ...initialState,
//       });
//       localStorage.setItem('loginToken', data.token);
//       await isLoggedIn();
//     } else {
//       setState({
//         ...state,
//         successMsg: '',
//         errorMsg: data.message,
//       });
//     }
//   };

//   // Show Message on Error or Success
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
//       <h1>Login</h1>
//       <form onSubmit={submitForm} noValidate>
//         <div className="form-control">
//           <label>Email</label>
//           <input
//             name="email"
//             type="email"
//             required
//             placeholder="Enter your email"
//             value={state.userInfo.email}
//             onChange={onChangeValue}
//           />
//         </div>
//         <div className="form-control">
//           <label>PassWord</label>
//           <input
//             name="password"
//             type="password"
//             required
//             placeholder="Enter your password"
//             value={state.userInfo.password}
//             onChange={onChangeValue}
//           />
//         </div>
//         {errorMsg}
//         {successMsg}
//         <div className="form-control">
//           <button type="submit">Login</button>
//         </div>
//       </form>
//       <div className="_navBtn">
//         <button onClick={toggleNav}>Register</button>
//       </div>
//     </div>
//   );
// }
const StyledLoginView = styled.main`
  max-width: 300px;
  margin: 0 auto;
  .link {
    cursor: pointer;
    text-align: center;
  }
`;

function LoginView() {
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const initialState = { firstName: '', lastName: '', email: '', password: '', confirmpassword: '' };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, history));
      dispatch(signin(formData, history));
    } else {
      var res = dispatch(signin(formData, history));
      console.log(res);
    }
  };
  const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const switchSignup = () => {
    setIsSignup(!isSignup);
  };
  return (
    <StyledLoginView>
      {isSignup ? <h1>Rejestracja</h1> : <h1>Logowanie</h1>}
      <Form onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <Form.Control name="firstName" placeholder="Imię" onChange={handleChange} />
            <Form.Control name="lastName" placeholder="Nazwisko" onChange={handleChange} />
          </>
        )}
        <Form.Control name="email" placeholder="E-mail" type="email" onChange={handleChange} />
        <Form.Control name="password" placeholder="Hasło" type="password" onChange={handleChange} />
        {isSignup && (
          <Form.Control
            name="confirmPassword"
            placeholder="Potwierdź hasło"
            type="password"
            onChange={handleChange}
          />
        )}

        <Button type="submit">{isSignup ? 'Zarejestruj się' : 'Zaloguj się'}</Button>
        <p className="link" onClick={switchSignup}>
          {isSignup ? 'Posiadasz już konto? Zaloguj się' : 'Nie posiadasz konta? Zarejestruj się'}
        </p>
      </Form>
      {/* <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
    </StyledLoginView>
  );
}

export default LoginView;
