import React, { Component } from 'react';
import "./body.css";
import Banner from './banner';
import Item from './item';
import { Container ,Row,Col } from 'react-bootstrap';

class Body extends Component {
    
    render() {
        return (
            <div>
                <Banner/>
                <Container className='mt-5'>
                <Row>
                    <Col className='me-5' > <Item/></Col>
                    <Col className='me-5' > <Item/></Col>
                    <Col > <Item/></Col>
                </Row>
                <Row className=' mt-5'>
                    <Col className='me-5' > <Item/></Col>
                    <Col className='me-5' > <Item/></Col>
                    <Col > <Item/></Col>
                </Row>
                </Container>
                
            </div>
        );
    }
}

export default Body;