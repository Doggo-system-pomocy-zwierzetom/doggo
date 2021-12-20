import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
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
  .dropdown-toggle.nav-link {
    color: #000;
  }
  .btn-missing {
    margin: auto;
    padding: 0.5rem 0.7rem;
    background: #ff2323;
    border-radius: 0.2rem;
    /* font-size: 1.2rem; */
    cursor: pointer;
    border: none;
    color: #fff;
    text-decoration: none;
  }
  .user-menu {
    display: flex;
    gap: 1rem;
  }
`;
function PageHeader() {
  const profile: any = localStorage.getItem('profile');
  const [user, setUser] = useState(JSON.parse(profile));
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    setUser(JSON.parse(profile));
  }, []);

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
            <div className="user-menu">
              {/* <button> */}
              <Link to="/zglaszanie-zaginiecia" className="btn-missing">
                Zgłoś zaginięcie
              </Link>
              {/* </button> */}
              {user ? (
                <NavDropdown title={`Imię Nazwisko`} id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Moje konto</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Zgłoszone zaginięcia</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5" onClick={() => localStorage.clear()}>
                    Wyloguj
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to="/logowanie" className="btn-missing">
                  Zaloguj
                </Link>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledPageHeader>
  );
}
export default PageHeader;
