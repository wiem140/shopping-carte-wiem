import "./Caise.css";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const Caise = () => {
    return (
        <div className="information">
<Container >
                <Form>
                    <Row>
                        <Col>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control type="text" required placeholder="Enter Your First Name"></Form.Control>
                        </Form.Group> 
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control type="text" required placeholder="Enter Your Last Name"></Form.Control>    
                        </Form.Group></Col> 
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formGridPhone">    
                        <Form.Label>Phone Number:</Form.Label> 
                        <Form.Control type="number" required placeholder="Enter Your Phone"></Form.Control>
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} controlId="formGridAddress">
                        <Form.Label>Address:</Form.Label>
                        <Form.Control required type="text" className="input" placeholder="Enter Your Address" />
                    </Form.Group>
                    <Row>
                    <Row>
                        <Form.Group as={Col} controlId="formGridPhone">    
                        <Form.Label>Carte Number:</Form.Label> 
                        <Form.Control type="number" required placeholder="Enter Your Carte numbre"></Form.Control>
                        </Form.Group>
                    </Row>
                        
                       
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    
                    <Row>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check required label="Agree to terms and conditions"
                                feedback="You must agree before submitting." />
                        </Form.Group>
                    </Row>
                    
                        <Button className="submit" variant="primary" type="submit">Submit</Button>
                    
                </Form>
                
            </Container>
            
        </div>
    )
}

export default Caise;
