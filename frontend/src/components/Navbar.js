import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledNavbar = styled.div`
  background: gray;
  display: flex;
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
          <Link to="/schroniska">Schroniska</Link>
        </li>
        <li>
          <Link to="/pomoc">Pomoc</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
}
export default Navbar;
