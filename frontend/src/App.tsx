import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import PageHeader from './components/PageHeader';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import MyContextProvider from './contexts/MyContext';
import AdoptionSingleView from './views/AdoptionSingleView';
import Upload from './components/UploadImage';

const GlobalStyle = createGlobalStyle`
main{
  padding-top: 3.5rem
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter basename="/">
        <MyContextProvider>
          <PageHeader />
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/kontakt" exact component={ContactView} />
            <Route path="/zaginiecia" exact component={MissingView} />
            <Route path="/adoptuj" exact component={AdoptionView} />
            <Route path="/wesprzyj-schronisko" exact component={NeedsView} />
            <Route path="/zbiorki" exact component={HelpView} />
            <Route path="/logowanie" exact component={LoginView} />
            <Route path="/rejestracja" exact component={RegisterView} />
            <Route path="/adoptuj/:id" exact component={AdoptionSingleView} />
            <Route path="/dodaj-zdjecie" exact component={Upload} />
          </Switch>
        </MyContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
