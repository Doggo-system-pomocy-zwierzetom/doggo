import React, { createContext, Component } from 'react';
import axios from 'axios';

export const MyContext = createContext<any>(undefined);

// Define the base URL
const Axios = axios.create({
  baseURL: 'http://localhost/php-login-registration-api/',
});

class MyContextProvider extends Component {
  constructor(props: any) {
    super(props);
    this.isLoggedIn();
  }

  // Root State
  state = {
    showLogin: true,
    isAuth: false,
    theUser: null,
  };

  // Toggle between Login & Sign up page
  toggleNav = () => {
    const showLogin = !this.state.showLogin;
    this.setState({
      ...this.state,
      showLogin,
    });
  };

  // On Click the Log out button
  logoutUser = () => {
    localStorage.removeItem('loginToken');
    this.setState({
      ...this.state,
      isAuth: false,
    });
  };

  registerUser = async (user: any) => {
    // Sending the user registration request
    const register = await Axios.post('register.php', {
      name: user.name,
      email: user.email,
      password: user.password,
    });

    return register.data;
  };

  loginUser = async (user: any) => {
    // Sending the user Login request
    const login = await Axios.post('login.php', {
      email: user.email,
      password: user.password,
    });
    return login.data;
  };

  // Checking user logged in or not
  isLoggedIn = async () => {
    const loginToken = localStorage.getItem('loginToken');

    // If inside the local-storage has the JWT token
    if (loginToken) {
      //Adding JWT token to axios default header
      Axios.defaults.headers.common['Authorization'] = 'bearer ' + loginToken;

      // Fetching the user information
      const { data }: any = await Axios.get('user-info.php');

      // If user information is successfully received
      if (data.success && data.user) {
        this.setState({
          ...this.state,
          isAuth: true,
          theUser: data.user,
        });
      }
    }
  };

  render() {
    console.log(this.state.isAuth);

    const contextValue = {
      rootState: this.state,
      toggleNav: this.toggleNav,
      isLoggedIn: this.isLoggedIn,
      registerUser: this.registerUser,
      loginUser: this.loginUser,
      logoutUser: this.logoutUser,
    };
    return <MyContext.Provider value={contextValue}>{this.props.children}</MyContext.Provider>;
  }
}

export default MyContextProvider;
