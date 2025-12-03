import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <>
      <Navbar bg='dark' data-bs-theme="dark" expand="lg" className="px-3">
        <Container className='m-0'>
          <Navbar.Brand as={Link} to="/">Spaceflight News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
