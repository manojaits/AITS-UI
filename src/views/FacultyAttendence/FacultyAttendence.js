import React, { Component } from 'react';

import { Badge, Card, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, CardBody, Input, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class FacultyAttendence extends Component {
    render() {
        return (

            <Row>
                <Col>
                    <Card>


                        <div className="text-left">
                            <CardHeader>
                                <div className="col-md-12" style={{ textAlign: 'center' }}>
                                    <h6>Faculty Attendence Table</h6>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row mt-2">
                                            <div className="col-lg-3 md-3 sm-3">

                                                <Input type="date" id="date-input" name="date-input" placeholder="date" />
                                            </div>
                                            <div className="col-lg-3 md-3 sm-3">

                                                <Input type="date" id="date-input" name="date-input" placeholder="date" />
                                            </div>
                                            <div className="col-lg-3 md-3 sm-3">
                                                <button type="button" className=" btn-success btn ml-4  applyButton" ><i className="fa fa-check-circle-o mr-2 pl-0"> </i>Apply All</button>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </CardHeader>
                        </div>


                        <CardBody>
                            <Table hover bordered striped responsive size="sm" style={{ textAlign: 'center' }}>

                                <thead>
                                    <tr>
                                        <th Colspan="5" >SUMMARY TABLE</th>
                                    </tr>
                                    <tr>
                                        <th>Roll Number</th>
                                        <th>Name</th>
                                        <th>Subject</th>
                                        <th>Date</th>
                                        <th>Attendence</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >16701F0012</td>
                                        <td>Manoj</td>
                                        <td Rowspan="8"></td>
                                        <td>9535416585</td>
                                        <td><input type="checkbox" /></td>

                                    </tr>
                                    <tr>
                                        <td >16701F0012</td>

                                        <td>Chaman Yallapur</td>
                                        <td>9535416585</td>
                                        <td><input type="checkbox" /></td>
                                    </tr>
                                    <tr>
                                        <td >16701F0012</td>

                                        <td>Chaman Yallapur</td>
                                        <td>9535416585</td>
                                        <td><input type="checkbox" /></td>
                                    </tr>
                                    <tr>
                                        <td >16701F0012</td>

                                        <td>Chaman Yallapur</td>
                                        <td>9535416585</td>
                                        <td><input type="checkbox" /></td>
                                    </tr>
                                    <tr>                                        <td >16701F0012</td>

                                        <td>Chaman Yallapur</td>
                                        <td>9535416585</td>
                                        <td><input type="checkbox" /></td>
                                    </tr>
                                    <tr>                                        <td >16701F0012</td>

                                        <td>Chaman Yallapur</td>
                                        <td>9535416585</td>
                                        <td><input type="checkbox" /></td>
                                    </tr>
                                    <tr>                                        <td >16701F0012</td>

                                        <td>Chaman Yallapur</td>
                                        <td>9535416585</td>
                                        <td><input type="checkbox" /></td>
                                    </tr>
                                    <tr>                                        <td >16701F0012</td>

                                        <td>Chaman Yallapur</td>
                                        <td>9535416585</td>
                                        <td><input type="checkbox" /></td>
                                    </tr>

                                </tbody>
                            </Table>
                            <div className="col text-right">
                                <button type="button" className=" btn-info btn ml-4 mt-2 applyButton"  >Assign Attendence</button>

                            </div>

                        </CardBody>
                    </Card>
                </Col>
            </Row>

        );
    }
}

export default FacultyAttendence;
