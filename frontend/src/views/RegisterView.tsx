import { useContext, useState } from 'react';
// import { MyContext } from '../contexts/MyContext';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { signin, signup } from '../actions/auth';
import { useDispatch } from 'react-redux';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { LoginInfoContext } from '../contexts/LoginInfoContextProvider';
import axios from 'axios';
import { emitKeypressEvents } from 'readline';

const StyledRegisterView = styled.main`
  /* display: flex; */
  /* gap: 1rem; */
  max-width: 300px;
  /*form {
    display: flex;
  }*/
`;

export default function RegisterView() {
  const [user, setUser] = useContext(LoginInfoContext);

  const initialUserState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
  const initialShelterState = { name: '', NIP: '', email: '', password: '', confirmPassword: '' };
  const [formUserData, setFormUserData] = useState(initialUserState);
  const [formShelterData, setFormShelterData] = useState(initialShelterState);
  const [ifShelter, setIfShelter] = useState(false);

  const history = useHistory();
  const handleSubmitUser = (e: any) => {
    e.preventDefault();
    axios
      .post('/user/signup', formUserData)
      .then((res) => {
        console.log(res);
        if (res.status !== 200) throw new Error('Error');
        return res;
      })
      .then((res: any) => {
        localStorage.setItem('profile', JSON.stringify(res.data));
        const profile: any = localStorage.getItem('profile') || null;
        setUser(JSON.parse(profile));
        history.push('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleSubmitShelter = (e: any) => {
    e.preventDefault();
    axios
      .post('/user/signupShelter', formShelterData)
      .then((res) => {
        console.log(res);
        if (res.status !== 200) throw new Error('Error');
        return res;
      })
      .then((res: any) => {
        localStorage.setItem('profile', JSON.stringify(res.data));
        const profile: any = localStorage.getItem('profile') || null;
        setUser(JSON.parse(profile));
        history.push('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleUserChange = (e: any) => setFormUserData({ ...formUserData, [e.target.name]: e.target.value });
  const handleShelterChange = (e: any) => setFormShelterData({ ...formShelterData, [e.target.name]: e.target.value });
  return (
    <>{user ? history.push('/') : 
        <StyledRegisterView>
          <h1>Rejestracja</h1>
          <button onClick={()=>setIfShelter(false)}>Użytkownik</button><button onClick={()=>setIfShelter(true)}>Schronisko</button>
          {ifShelter ?
          (<Form onSubmit={handleSubmitShelter}>
            <Form.Control name="name" placeholder="Nazwa" onChange={handleShelterChange} />
            <Form.Control name="NIP" placeholder="NIP" onChange={handleShelterChange}/>

            <Form.Control name="email" placeholder="E-mail" type="email" onChange={handleShelterChange}/>
            <Form.Control name="password" placeholder="Hasło" type="password" onChange={handleShelterChange}/>

            <Form.Control name="confirmPassword" placeholder="Potwierdź hasło" type="password" onChange={handleShelterChange}/>
            <Button type="submit">Zarejestruj się</Button>
            <p className="link">
              Posiadasz już konto?
              <Link to="/logowanie">Zaloguj się</Link>
            </p>
          </Form>)
          :
          (<Form onSubmit={handleSubmitUser}>
            <Form.Control name="firstName" placeholder="Imię" onChange={handleUserChange} />
            <Form.Control name="lastName" placeholder="Nazwisko" onChange={handleUserChange}/>

            <Form.Control name="email" placeholder="E-mail" type="email" onChange={handleUserChange}/>
            <Form.Control name="password" placeholder="Hasło" type="password" onChange={handleUserChange}/>

            <Form.Control name="confirmPassword" placeholder="Potwierdź hasło" type="password" onChange={handleUserChange}/>
            <Button type="submit">Zarejestruj się</Button>
            <p className="link">
              Posiadasz już konto?
              <Link to="/logowanie">Zaloguj się</Link>
            </p>
          </Form>)}
        </StyledRegisterView>
      }
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
