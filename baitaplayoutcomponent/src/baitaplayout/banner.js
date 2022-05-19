import React, { Component } from 'react';
import "./banner.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container ,Row ,Col, Button} from 'react-bootstrap';

class Banner extends Component {
    render() {
        return (
 
            <Container className='banner'>
                <Row>
                    <Col>
                        <h1>A warm welcome!</h1>
                        <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <Button variant="primary">Call to Action</Button>{' '}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Banner;