import { signOut } from 'aws-amplify/auth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Sitenave() {
    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <header>
            <Navbar bg='dark' expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand>Psicoweb</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id='basic-navdar-nav'>
                        <Nav className='ms-md-auto'>
                            <Nav.Link as={Link} to='/home'>Perfil</Nav.Link>
                            <Nav.Link as={Link} to='/registro'>Chat</Nav.Link>
                            <Nav.Link onClick={handleSignOut}>Cerrar Sesión</Nav.Link>
                            <Nav.Link as={Link} to='/contactos'>Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Sitenave;
