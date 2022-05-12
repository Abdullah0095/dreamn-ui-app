import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import sleepImage from '../../images/ASSET/INTRO PAGE/IMG_sleep.png';



const Intro1 = () => {
    return (
        <Container fluid>
            <div className='intro2'>

                <Row>
                    <Col><img fluid src={sleepImage} alt="" /></Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Get Enough Sleep</h1>
                        <p>At least 6 straight hours <br /> uninterrupted sleep a day</p>
                        
                    </Col>
                </Row>

                <footer><small>Ⓒ DreamN 2022</small></footer>

            </div>
        </Container>


    );
};

export default Intro1;