import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Sitenave() {
    return (
        <header>
            <Navbar bg='dark' expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand>Psicoweb</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id='basic-navdar-nav'>
                        <Nav className='ms-md-auto'>
                            <Nav.Link href='/Login'>Inicio de Sesion</Nav.Link>
                            <Nav.Link href='Registro'>Registro</Nav.Link>
                            <Nav.Link href='Contactos'>Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Sitenave;