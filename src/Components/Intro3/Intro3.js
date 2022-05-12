import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import intro2image from '../../images/ASSET/INTRO PAGE/Logo.png';


const Intro3 = () => {
    return (
        <Container fluid>
            <div className='intro2'>
                
                <Row>
                    <Col><img fluid src={intro2image} alt="not" /></Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Get Rewarded</h1>
                        <p>Claim your daily reward at <br /> 'my reward page'.</p>
                        <Button variant="warning">JOIN</Button>
                    </Col>
                </Row>

                <footer><small>Ⓒ DreamN 2022</small></footer>
                
            </div>
        </Container>
    );
};

export default Intro3;