import React, { useContext } from 'react';
import { MyContext } from '../contexts/MyContext';
import { useState, useEffect } from 'react';

// Importing the Login & Register Component
import LoginView from './LoginView';
// import Register from './RegisterView';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';

export default function HomeView() {
  // const { rootState, logoutUser } = useContext(MyContext);
  // const { isAuth, theUser, showLogin } = rootState;
  const profile: any = localStorage.getItem('profile');
  const [user, setUser] = useState(JSON.parse(profile));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');
    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken: any = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    let profile: any = localStorage.getItem('profile');
    setUser(JSON.parse(profile));
  }, [location]);
  // If user Logged in
  console.log(user);

  // if (user) {
  return (
    <>
      {user ? (
        <div className="userInfo">
          {/* <div className="_img">
          <span role="img" aria-label="User Image">
            👦
          </span>
        </div>
        <h1>{theUser.name}</h1>
        <div className="_email">
          <span>{theUser.email}</span>
        </div> */}
          <div>{user.result.name}</div>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginView />
      )}
    </>
  );
  // }
  // Showing Login Or Register Page According to the condition
  // else return
}
