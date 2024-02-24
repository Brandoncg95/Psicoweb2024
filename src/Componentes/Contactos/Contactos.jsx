import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Contactos() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Contactanos para ampliar información</h1></Col>
            </Row>
            <Row>
                <Col className="px-2 my-2">
                    <Card style={{ width: '12rem' }}>
                        <Card.Img src="/image/wpp.png" variant="top" />
                        <Card.Body>
                            <Card.Title>WhatsApp</Card.Title>
                            <Card.Text>57+3187032636</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="px-2 my-2">
                    <Card style={{ width: '12rem' }}>
                        <Card.Img src="/image/facebook.png" variant="top" />
                        <Card.Body>
                            <Card.Title>Facebook</Card.Title>
                            <Card.Text>Psicoweb</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="px-2 my-2">
                    <Card style={{ width: '12rem' }}>
                        <Card.Img src="/image/linkedin.jpg" variant="top" />
                        <Card.Body>
                            <Card.Title>Linkedin</Card.Title>
                            <Card.Text>Psicoweb</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Contactos;
