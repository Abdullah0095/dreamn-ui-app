import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import intro16image from '../../images/ASSET/INTRO PAGE/IMG_setupwallet.png';

const Intro16 = () => {
    return (
        <Container fluid>
            <div className='intro2'>

                <div>
                    <Row>
                        <Col><img fluid src={intro16image} alt="not" /></Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Set your BSC Wallet</h1>
                            <p>Fill in your BSC Wallet Address <br />where you will receive your rewards</p>

                            <div>
                                <Row className="formBox justify-content-md-center">
                                    <Col  >
                                        <input style={{textAlign: 'center'}} size='50' type="text" name="" placeholder="Ox..." />
                                    </Col>
                                </Row>
                                <Row className="formBox justify-content-md-center">
                                    <Col  >
                                    <Button variant="warning">CONFIRM</Button>
                                    </Col>
                                </Row>
                            </div>

                        </Col>
                    </Row>
                </div>

                <footer><small>Ⓒ DreamN 2022</small></footer>

            </div>
        </Container>
    );
};

export default Intro16;