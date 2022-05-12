import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import image from '../../images/ASSET/INTRO PAGE/Background.png';
import loginImage from '../../images/ASSET/INTRO PAGE/Logo.png';

const LoginPage = () => {
    return (
        <Container fluid >
            {/* style={{ backgroundImage: `url(${image})`}} */}
            <div id='loginPage'>
                <div><img fluid src={loginImage} alt="" /></div>
                <div className='formBox'>
                    <Row className="justify-content-md-center">
                        <Col  >
                            <input size='50' type="text" name="" placeholder="Email" />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col  >
                            <input size='50' type="text" name="" placeholder="Password" />
                        </Col>
                    </Row>
                </div>
                <a href="/">Forgot Password</a>
                <div><Button variant="warning" id='loginBtn'>Login</Button></div>
            </div>
        </Container>
    );
};

export default LoginPage;