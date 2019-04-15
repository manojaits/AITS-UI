import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, CardBody, Input, CardGroup, Col, Container, PaginationLink, Row, Table } from 'reactstrap';
class ResetPassword extends Component {

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
                                                <h1>Reset Password</h1>
                                            </div>
                                            <div className="mt-3">
                                                <div className='col-12'>OTP</div>
                                            </div>
                                            <div className='col-11'>
                                                <Input
                                                    name='Enter OTP'

                                                    placeholder=' Enter OTP'
                                                />

                                            </div>
                                            <div className="mt-3">
                                                <div className='col-12'>New PassWord</div>
                                            </div>
                                            <div className='col-11'>
                                                <Input
                                                    name='Enter New PassWord'

                                                    placeholder='Enter New PassWord'
                                                />

                                            </div>
                                            <div className="mt-3">
                                                <div className='col-12'>Confirm PassWord</div>
                                            </div>
                                            <div className='col-11'>
                                                <Input
                                                    name='Enter Confirm PassWord'

                                                    placeholder='Enter Confirm PassWord'
                                                />

                                            </div>

                                            <div className="mt-3">

                                                <div className='col-8'>
                                                    <Link to="/Login">
                                                        <button type="button" className="btn-info btn ml-2 lg-3 md-4 sm-4 sx-4 mt-2">Save </button>
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
export default ResetPassword;
