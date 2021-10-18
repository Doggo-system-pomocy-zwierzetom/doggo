import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import Missing from './views/Missing';
import Help from './views/Help';
import Contact from './views/Contact';
import Adoption from './views/Adoption';
import Needs from './views/Needs';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';

const GlobalStyle = createGlobalStyle`
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter basename="/">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/kontakt" exact component={Contact} />
          <Route path="/zaginiecia" exact component={Missing} />
          <Route path="/adoptuj" exact component={Adoption} />
          <Route path="/wesprzyj-schronisko" exact component={Needs} />
          <Route path="/zbiorki" exact component={Help} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
