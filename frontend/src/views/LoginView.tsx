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

        // setUser(JSON.parse(localStorage.getItem('profile')));
        setUser(JSON.parse(profile));
      })
      .then((res) => {})
      .catch(function (error) {
        console.log(error);
      });

    // if (isSignup) {
    //   dispatch(signup(formData, history));
    //   dispatch(signin(formData, history));
    // } else {

    // var res = dispatch(signin(formData, history));
    // const profile: any = localStorage.getItem('profile') || null;
    // console.log(localStorage.getItem('profile'));

    // setUser(JSON.parse(profile));

    // console.log(res);
    // }
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
