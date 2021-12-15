import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { useState } from 'react';
const StyledPageHeader = styled.div`
  position: absolute;
  /* position: sticky; */
  width: 100vw;
  /* width: 100% */
  z-index: 2;
  /* margin: 0 0 auto 0 */
  /* background: gray; */
  /* display: flex; */
  /* height: 3.5rem; */
  /* ul {
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
} */
  /* .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover */
  .selected.nav-link:focus {
    color: #000;
  }
`;
function PageHeader() {
  const [expanded, setExpanded] = useState(false);
  return (
    <StyledPageHeader>
      {/* <ul>
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
      </ul> */}
      <Navbar bg="success" expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            Home
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={NavLink}
                activeClassName="selected"
                to="/zaginiecia"
                onClick={() => setExpanded(false)}
              >
                Zaginięcia
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="selected"
                to="/adoptuj"
                onClick={() => setExpanded(false)}
              >
                Adoptuj
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="selected"
                to="/wesprzyj-schronisko"
                onClick={() => setExpanded(false)}
              >
                Wesprzyj schronisko
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="selected"
                to="/zbiorki"
                onClick={() => setExpanded(false)}
              >
                Zbiórki
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="selected"
                to="/kontakt"
                onClick={() => setExpanded(false)}
              >
                Kontakt
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledPageHeader>
  );
}
export default PageHeader;
