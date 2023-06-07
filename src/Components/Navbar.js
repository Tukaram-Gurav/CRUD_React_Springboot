import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavbarEx() {
  return (
    <Navbar expand="lg" variant="light" bg="primary">
      <Container>
        <Navbar.Brand href="#">Employee Management</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarEx;