import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import intro2image from '../../images/ASSET/INTRO PAGE/Logo.png';


const Intro13 = () => {
    return (

        <Container fluid>
            <div className='intro2'>

                <div>
                <Row>
                    <Col><img fluid src={intro2image} alt="not" /></Col>
                </Row>
                <Row>
                    <Col>
                        <h1>EARN BNB WHILE <br /> <span style={{ color: 'rgb(9, 255, 214)' }}>SLEEPING</span>  WITH <br /> <span style={{ color: 'rgb(9, 255, 214)' }}>DREAM'N</span> </h1>

                    </Col>
                </Row>
                </div>

                <footer><small>Ⓒ DreamN 2022</small></footer>

            </div>
        </Container>

    );
};

export default Intro13;