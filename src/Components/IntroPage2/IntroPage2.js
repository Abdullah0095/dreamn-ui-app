import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import introPage2image from '../../images/ASSET/INTRO PAGE/IMG_sleep.png';

const IntroPage2 = () => {
    return (
        <Container fluid>
            <div className='intro2'>

                <div>
                    <Row>
                        <Col><img fluid src={introPage2image} alt="not" /></Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <h2>JOIN THE <br />CHALLENGE</h2>
                                <p>Challenge yourself and be<br />rewarded with better sleep and <br />a healthier you.</p>
                            </div>

                            <div>

                                <Row className="formBox justify-content-md-center">
                                    <Col>
                                        <div><Button variant="warning">CREATE ACCOUNT</Button></div>
                                        <div>Already have an account? <span style={{color: 'yellow', fontWeight: 'bold'}}>Sign in</span> </div>
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

export default IntroPage2;