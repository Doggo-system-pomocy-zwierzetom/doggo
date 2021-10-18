import React from 'react';
import {Route, Router, Link, Switch} from 'react-router-dom';

function Navbar(){

    return(
        <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        </div>
    )
}
export default Navbar;