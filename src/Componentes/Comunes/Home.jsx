import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Image } from "react-bootstrap";


function Home() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col xs={4} sm={6}>
                    <Image
                        src="/image/Imagen1.png"
                        fluid />
                </Col>
                <Col sm={6}>
                    <h1 className="font-weight-light">Contacts App</h1>
                    <p className="mt-4">
                        ¿Que es Psicoweb?
                        <br /><br />
                        Es una aplicación enfocada en:

                        <br />1. Acceso ampliado a servicios Salud Mental<br />
                        <br />2. Mejora a la Salud Mental<br />
                        <br />3.Sensibilización y concientización de la Salud Mental<br />
                        <br />4. Conexión facilitada entre usuarios y profesionales<br />


                    </p>
                    <Button variant="outline-primary">Contactanos &gt;&gt;</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
