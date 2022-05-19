import React, { Component } from 'react';
import "./header.css";
import { Container, Row , Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Container >
                    <Row>
                        <Col sm={8} className="a">Start Bootsrap</Col>
                        <Col sm={4} className="e">
                        <a  className=' c d'>Home</a>
                        <a className='b c'>About</a>
                        <a className='b c'>Service</a>
                        <a className='b c'>Contact</a>
                        </Col>
                    </Row>
                    </Container>
            </div>
        );
    }
}

export default Header;