import React, { Component } from 'react';
import './EditProfile.scss';
import { Link } from 'react-router-dom';

import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class EditProfile extends Component {


    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>

                    <div class="bg-img">
                        <form action="LoginController" class="container" method="post">
                            <h2 align="center">Edit Profile</h2>

                            <div class="row">

                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="userId"><b>Enter Your ID</b></label> <input type="text"
                                            placeholder="Enter Your ID" maxlength="10" name="rollNo"
                                            required="required" alt="enter your roll no" readonly="readonly" />
                                    </div>
                                </div>




                                <div class="col-6">

                                    <label for="userId"><b>User Name</b></label> <input type="text"
                                        placeholder="Enter Your Name" maxlength="10" name="rollNo"
                                        required="required" alt="enter your roll no" />
                                    <div class="help-block with-errors"></div>
                                </div>





                                <div class="col-6">
                                    <label for="mobileNo"><b>Mobile No</b></label> <input type="text"
                                        placeholder="Enter Mobile No" maxlength="10" name="mobileno"
                                        required />
                                </div>

                                <div class="col-6">
                                    <label for="Uemail"><b>Email</b></label> <input type="text"
                                        placeholder="abc@gmail.com" name="email" required />
                                </div>



                                <div class="col-6">
                                    <label for="pwd"><b>Password</b></label> <input type="password"
                                        placeholder="Enter your Password" name="password" required />
                                </div>

                                <div class="col-6">
                                    <label for="cpsw"><b>Conform Password</b></label> <input
                                        type="password" placeholder="Confirm Password"
                                        name="conformpassword" required />
                                </div>

                                <div class="col-12 text-center">

                                    <button type="button" className="btn-info btn ml-2 lg-3 md-4 sm-4 sx-4 mt-2">Update </button>

                                    <Link to="/StudentAttendence">

                                        <button type="button" className="btn-danger btn ml-2 lg-3 md-4 sm-4 sx-4 mt-2">Back </button>
                                    </Link>
                                </div>

                            </div>

                        </form>
                    </div>

                </Container>
            </div>


        );
    }
}

export default EditProfile;
