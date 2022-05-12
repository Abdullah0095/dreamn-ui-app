import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import intro2image from '../../images/ASSET/INTRO PAGE/Logo.png';


const Intro2 = () => {
    return (
        <Container fluid>
            <div className='intro2'>
                
                <Row>
                    <Col><img fluid src={intro2image} alt="not" /></Col>
                </Row>
                <Row>
                    <Col>
                        <h1>HOLD <span style={{color: 'rgb(9, 255, 214)'}}>$DreamN </span> TOKEN</h1>
                        <p>Hold at least 400 $DreamN <br /> Token on your wallet</p>
                    </Col>
                </Row>

                <footer><small>Ⓒ DreamN 2022</small></footer>
                
            </div>
        </Container>
    );
};

export default Intro2;