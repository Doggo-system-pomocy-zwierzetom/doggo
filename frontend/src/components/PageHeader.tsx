import { NavLink, Link, useHistory, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import { LoginInfoContext } from '../contexts/LoginInfoContextProvider';
import decode from 'jwt-decode';
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
  .navbar {
    /* background: #545454; */
    background: var(--main);
    a {
      color: var(--white);
    }
    a.nav-link {
      color: var(--white);
      &:hover {
        color: var(--white);
      }
      .navbar-toggler-icon {
        color: var(--white);
      }
    }
    .navbar-brand:hover {
      color: var(--white);
    }
  }
  .selected {
    color: var(--white);
    font-weight: 600;
  }
  .selected.nav-link:focus {
    color: var(--white);
  }
  .dropdown-toggle.nav-link {
    color: var(--white);
  }
  a.dropdown-item {
    color: var(--black);
  }
  .btn-missing {
    margin: auto;
    padding: 0.5rem 0.8rem;
    background: var(--warning);
    color: var(--black);
    border-radius: 0.2rem;
    font-weight: 600;
    /* font-size: 1.2rem; */
    cursor: pointer;
    border: none;
    text-decoration: none;
  }
  .link-login {
    color: #000;
    text-decoration: none;
    margin: auto;
    font-weight: 600;
  }
  .user-menu {
    display: flex;
    gap: 1.5rem;
  }
`;
function PageHeader() {
  const [user, setUser] = useContext(LoginInfoContext);

  // const profile: any = localStorage.getItem('profile');
  // const [user, setUser] = useState(JSON.parse(profile));
  const [expanded, setExpanded] = useState(false);
  const history = useHistory();
  // useEffect(() => {
  //   setUser(JSON.parse(profile));
  // }, []);
  const location = useLocation();
  function logout(){
    localStorage.clear();
    setUser(null);
    history.push('/');
    //window.location.reload();
  }
    
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
      <Navbar expand="lg" variant="dark" expanded={expanded}>
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
              {/* <Nav.Link
                as={NavLink}
                activeClassName="selected"
                to="/zbiorki"
                onClick={() => setExpanded(false)}
              >
                Zbiórki
              </Nav.Link> */}
            </Nav>
            <div className="user-menu">
              {/* <button> */}
              <Link to={user ? '/zglaszanie-zaginiecia' : '/logowanie'} className="btn-missing">
                Zgłoś zaginięcie
              </Link>
              {/* </button> */}
              {user ? (
                <NavDropdown title={`${user && user.result.name}`} id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">{user.name}</NavDropdown.Item>

                  <NavDropdown.Item><Link to="/konto">Moje konto</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/moje-zaginiecia">Zgłoszone zaginięcia</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="#action5"
                    onClick={() => {
                      logout()
                    }}
                  >
                    Wyloguj
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to="/logowanie" className="link-login">
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
