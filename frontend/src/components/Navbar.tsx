import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledNavbar = styled.div`
  background: gray;
  display: flex;
  height: 3.5rem;
  ul {
    display: flex;
    list-style-type: none;
    li {
      margin: 0 1rem;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
  .selected {
    color: #0059ff;
  }
`;
function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/zaginiecia">
            Zaginięcia
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/adoptuj">
            Adoptuj
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/wesprzyj-schronisko">
            Wesprzyj schronisko
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/zbiorki">
            Zbiórki
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName="selected" to="/kontakt">
            Kontakt
          </NavLink>
        </li>
      </ul>
    </StyledNavbar>
  );
}
export default Navbar;
