import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledNavbar = styled.div`
  background: gray;
  display: flex;
  ul {
    display: flex;
    list-style-type: none;
    li {
      margin: 0 1rem;
      a {
        text-decoration: none;
      }
    }
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
          <Link to="/zaginiecia">Zaginięcia</Link>
        </li>
        <li>
          <Link to="/adoptuj">Adoptuj</Link>
        </li>
        <li>
          <Link to="/wesprzyj-schronisko">Wesprzyj schronisko</Link>
        </li>
        <li>
          <Link to="/zbiorki">Zbiórki</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
}
export default Navbar;
