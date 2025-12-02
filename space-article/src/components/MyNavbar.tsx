import { Container, Nav, Navbar } from 'react-bootstrap';

function MyNavbar() {
  return (
    <>
      <Navbar bg='dark' data-bs-theme="dark" expand="lg" className="px-3">
        <Container>
          <Navbar.Brand href="#home">Spaceflight News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
