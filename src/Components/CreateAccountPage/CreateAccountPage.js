import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import accountImage from '../../images/ASSET/INTRO PAGE/IMG_createacc.png';
// import image from '../../images/ASSET/INTRO PAGE/Background.png';

const CreateAccountPage = () => {
    return (
        <Container fluid className=" justify-content-center" >
            {/* style={{ backgroundImage: `url(${image})`}} */}
            <div className='createPage'>
                <div>
                    <img fluid src={accountImage} alt="" />
                    <h1>Create Your Account</h1>
                    <p>Please fill input below here</p>
                </div>
                

                <Row className="formBox justify-content-center">
                    <form action="">
                    <Row className="justify-content-md-center">
                        <Col  >
                            <input size='50' type="text" name="" placeholder="Full Name" />
                        </Col>
                    </Row>
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
                    <Row className="justify-content-md-center">
                        <Col  >
                            <input size='50' type="text" name="" placeholder="Repeat Password" />
                        </Col>
                    </Row>
                        <div><Button id='formBtn' variant="warning">SIGN UP</Button></div>
                        <div>
                            <p>Already have an account? <span style={{ color: 'yellow', fontWeight: 'bold' }}>Sign in</span> </p>
                        </div>
                    </form>
                </Row>

                <div><footer><small>Ⓒ DreamN 2022</small></footer></div>

            </div>


        </Container>
    );
};

export default CreateAccountPage;