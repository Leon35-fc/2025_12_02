import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <>
      <Navbar expand="md" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Spaceflight News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Link className="nav-link" to="/"> */}
              Home
              {/* </Link> */}
              {/* <Link className="nav-link" to="/class"> */}
              Class
              {/* </Link> */}
              {/* <Nav.Link as={Link} to="/fetch">
                Fetch
              </Nav.Link> */}
              {/* <Link className="nav-link" to="/link">
                NotFound
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
