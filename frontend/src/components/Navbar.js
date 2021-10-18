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
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
}
export default Navbar;
