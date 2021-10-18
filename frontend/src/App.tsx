import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Link, Switch} from 'react-router-dom';
import Home from './views/Home';
import Missing from './views/Missing';
import Shelters from './views/Shelters';
import Help from './views/Help';
import Contact from './views/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/zaginiecia">
            <Missing />
          </Route>
          <Route path="/schroniska">
            <Shelters />
          </Route>
          <Route path="/pomoc">
            <Help />
          </Route>
          <Route path="/kontakt">
            <Contact />
          </Route>
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
