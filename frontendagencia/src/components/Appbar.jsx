import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './NoStress.png'
import { Offcanvas, Container,Navbar, Nav } from 'react-bootstrap';


const Appbar = () => {

  return (
    <div>
      <Navbar className="fixed-top" bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="/">
            <img id="logo" className='img-logo' src={logo} alt='' />
            Agencia NoStress
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">NoStress</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/novocliente">Cadastrar</Nav.Link>
                <Nav.Link href="/novodestino">Destinos</Nav.Link>
                <Nav.Link href="/buscaranuncio">Promoções</Nav.Link>
                <Nav.Link href="/contato">Contato</Nav.Link>
                
              
              </Nav>
              
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>

  );
}
export default Appbar;