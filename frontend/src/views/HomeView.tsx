import React, { useContext } from 'react';
import { MyContext } from '../contexts/MyContext';

// Importing the Login & Register Component
import Login from './LoginView';
import Register from './RegisterView';

export default function HomeView() {
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;

  // If user Logged in
  if (isAuth) {
    return (
      <div className="userInfo">
        <div className="_img">
          <span role="img" aria-label="User Image">
            👦
          </span>
        </div>
        <h1>{theUser.name}</h1>
        <div className="_email">
          <span>{theUser.email}</span>
        </div>
        <button onClick={logoutUser}>Logout</button>
      </div>
    );
  }
  // Showing Login Or Register Page According to the condition
  else if (showLogin) {
    return <Login />;
  } else {
    return <Register />;
  }
}
