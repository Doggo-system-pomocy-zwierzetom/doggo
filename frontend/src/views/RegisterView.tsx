import { useContext, useState } from 'react';
// import { MyContext } from '../contexts/MyContext';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { signin, signup } from '../actions/auth';
import { useDispatch } from 'react-redux';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { LoginInfoContext } from '../contexts/LoginInfoContextProvider';

const StyledRegisterView = styled.main`
  max-width: 300px;
`;

export default function RegisterView() {
  const [user, setUser] = useContext(LoginInfoContext);

  const initialState = { firstName: '', lastName: '', email: '', password: '', confirmpassword: '' };
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const history = useHistory();
  const handleSubmit = (e: any) => {
    // e.preventDefault();

    dispatch(signup(formData, history));
    dispatch(signin(formData, history));
  };
  return (
    <>
      {user ? (
        <Redirect to="/" />
      ) : (
        <StyledRegisterView>
          <h1>Rejestracja</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Control name="firstName" placeholder="Imię" />
            <Form.Control name="lastName" placeholder="Nazwisko" />

            <Form.Control name="email" placeholder="E-mail" type="email" />
            <Form.Control name="password" placeholder="Hasło" type="password" />

            <Form.Control name="confirmPassword" placeholder="Potwierdź hasło" type="password" />

            <Button type="submit">{'Zarejestruj się'}</Button>
            <p className="link">
              Posiadasz już konto?
              <Link to="/logowanie">Zaloguj się</Link>
            </p>
          </Form>
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
