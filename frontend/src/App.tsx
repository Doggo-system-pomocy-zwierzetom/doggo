import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
// import logo from './logo.svg';
import './App.css';
import HomeView from './views/HomeView';
import MissingView from './views/MissingView';
import HelpView from './views/HelpView';
import ContactView from './views/ContactView';
import AdoptionView from './views/AdoptionView';
import NeedsView from './views/NeedsView';
import Navbar from './components/Navbar';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
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
            <Route path="/" exact component={HomeView} />
            <Route path="/kontakt" exact component={ContactView} />
            <Route path="/zaginiecia" exact component={MissingView} />
            <Route path="/adoptuj" exact component={AdoptionView} />
            <Route path="/wesprzyj-schronisko" exact component={NeedsView} />
            <Route path="/zbiorki" exact component={HelpView} />
            <Route path="/logowanie" exact component={LoginView} />
            <Route path="/rejestracja" exact component={RegisterView} />
          </Switch>
        </MyContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
