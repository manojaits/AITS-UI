import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, CardBody, Input, CardGroup, Col, Container, PaginationLink, Row, Table } from 'reactstrap';
class ForgotPassword extends Component {

    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6">
                            <CardGroup>

                                <Card className="p-4">

                                    <CardBody>
                                        <div >
                                            <div className='col-12'>
                                                <div>Forgot Password</div>
                                            </div>
                                            <div className="mt-3">
                                                <div className='col-12'>Mobile Nuber</div>
                                            </div>
                                            <div className='col-11'>
                                                <Input
                                                    name='Enter Your Mobile Number'

                                                    placeholder='Enter Your Mobile Number'
                                                />

                                            </div>

                                            <div className="mt-3">

                                                <div className='col-8'>
                                                    <Link to="/ResetPassword">

                                                        <button type="button" className="btn-info btn ml-2 lg-3 md-4 sm-4 sx-4 mt-2">Send OTP </button>
                                                    </Link>
                                                    <Link to="/Login">

                                                        <button type="button" className="btn-info btn ml-2 lg-3 md-4 sm-4 sx-4 mt-2" >Back</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default ForgotPassword;
