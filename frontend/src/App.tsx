import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import HomeView from './views/HomeView';
import MissingView from './views/MissingView';
import MissingSingleView from './views/MissingSingleView';
import HelpView from './views/HelpView';
import AdoptionView from './views/AdoptionView';
import NeedsView from './views/NeedsView';
import PageHeader from './components/PageHeader';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import MyContextProvider from './contexts/MyContext';
import AdoptionSingleView from './views/AdoptionSingleView';
import MissingAddView from './views/MissingAddView';
import AccountView from './views/AccountView';
import Upload from './components/UploadImage';
import MyMissingsView from './views/MyMissingsView';

const GlobalStyle = createGlobalStyle`
margin: 0;
padding:0;

body{
  background: var(--outline-lighten);
  background: linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.9)), url("https://i.ibb.co/gy897P8/tlo.png");

}
main{
  padding-top: 3.5rem;
  margin: 0 auto;
  //max-width:1000px;
}
:root{
  --main: hsl(184.88372093023256, 76.78571428571429%, 21.96078431372549%);
  --main-01: hsl(180, 40.983606557377044%, 88.88235294117647%);
  --warning-01: hsl(11.450381679389315, 40.778656126482204%, 90.6078431372549%);
  --second: hsl(180, 40.983606557377044%, 35.88235294117647%);
  --second-hover: hsl(180, 40.983606557377044%, 45.88235294117647%);
  --white: hsl(60, 100%, 99.01960784313727%);
  --text-shadow-white: hsl(60, 100%, 99.01960784313727%);
  --black: hsl(0, 0%, 0%);
  --dark-grey: hsl(0, 0%, 20%);
  --dark-grey2: hsl(0, 0%, 30%);
  --warning: hsl(11.450381679389315, 51.778656126482204%, 49.6078431372549%);
  --selected-item: hsl(187.50000000000009, 86.00000000000006%, 93.07843137254902%);
  --not-selected-item: hsl(0, 0%, 98%);
  --outline: hsl(270.0000000000002, 20.000000000000085%, 96.078431372549%);
  --card-outline: hsl(270.0000000000002, 20.000000000000085%, 86.078431372549%);
  --card-outline-selected: hsl(180, 40.983606557377044%, 72.88235294117647%);
  --outline-lighten: hsl(270.0000000000002, 20.000000000000085%, 99.078431372549%);
  --outline-darken: hsl(270.0000000000002, 20.000000000000085%, 65.078431372549%);
  --yellow: #ffc451;
  --yellow-hover: #ffd584;

  --outline: 0.1rem solid var(--card-outline);
  --outline-selected: 0.15rem solid var(--card-outline-selected);

}

.btn-more {
    margin: 0 auto 0 0;
    /* cursor: pointer; */
    background: var(--second);
    color: var(--white);
    border: transparent;
    border-radius: 0.25rem;
    padding: 0.5rem 1.2rem;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.03em;
    letter-spacing: 0.02em;

    &:hover {
      /* background: green; */
      /* transition: color .15s ease-in-out, background-color .15s ease-in-out,
      border-color .15s ease-in-out, box-shadow .15s ease-in-out; */
      color: var(--white);
      background: var(--main);
    }
  }
  .btn-delete {
    color: var(--white);
    margin-right: 0rem;
    padding: 0.5rem 1.3rem;
    background: var(--dark-grey2);
    border-radius: 0.3rem;
    font-weight: 600;
    font-size: 1.1em;
    cursor: pointer;
    border: none;
    text-decoration: none;
    box-shadow: inset -20px 0px 20px -10px var(--outline);
    font-size: 1.03em;
    padding: 0.5em 1.2em;
    margin-left: 1.0rem;
    

    &:hover {
      /* background: green; */
      /* transition: color .15s ease-in-out, background-color .15s ease-in-out,
      border-color .15s ease-in-out, box-shadow .15s ease-in-out; */
      color: var(--white);
      background: var(--dark-grey);
    }
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

            <Route path="/zaginiecia" exact component={MissingView} />
            <Route path="/zglaszanie-zaginiecia" exact component={MissingAddView} />
            <Route path="/zaginiecia/:id" exact component={MissingSingleView} />
            <Route path="/adoptuj" exact component={AdoptionView} />
            <Route path="/wesprzyj-schronisko" exact component={NeedsView} />
            <Route path="/zbiorki" exact component={HelpView} />
            <Route path="/logowanie" exact component={LoginView} />
            <Route path="/rejestracja" exact component={RegisterView} />
            <Route path="/adoptuj/:id" exact component={AdoptionSingleView} />
            <Route path="/dodaj-zdjecie" exact component={Upload} />
            <Route path="/konto" exact component={AccountView} />
            <Route path="/moje-zaginiecia" exact component={MyMissingsView} />
          </Switch>
        </MyContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
