import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Registro() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Registar</h1></Col>
            </Row>
            <Row className="px-4 my-5">
                <Col sm={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo Electronico</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa Correo" />
                            <Form.Text className='text-muted'>
                                ¡Nunca compartiremos tu correo electrónico!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" minLength="8" placeholder="ingresa Contraseña" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formConfirm">
                            <Form.Label>Confirma</Form.Label>
                            <Form.Control type="password" minLength="8" placeholder="Confirma Contraseña" />
                        </Form.Group>

                        <Button variant="primary" type="submit">Registro &gt;&gt;</Button>&nbsp;
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Registro;