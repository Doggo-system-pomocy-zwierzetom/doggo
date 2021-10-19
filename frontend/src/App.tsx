import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import Missing from './views/Missing';
import Help from './views/Help';
import Contact from './views/Contact';
import Adoption from './views/Adoption';
import Needs from './views/Needs';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Login from './views/Login';
import Register from './views/Register';
import MyContextProvider from './contexts/MyContext';

const GlobalStyle = createGlobalStyle`
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter basename="/">
        <MyContextProvider>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/kontakt" exact component={Contact} />
            <Route path="/zaginiecia" exact component={Missing} />
            <Route path="/adoptuj" exact component={Adoption} />
            <Route path="/wesprzyj-schronisko" exact component={Needs} />
            <Route path="/zbiorki" exact component={Help} />
            <Route path="/logowanie" exact component={Login} />
            <Route path="/rejestracja" exact component={Register} />
          </Switch>
        </MyContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
