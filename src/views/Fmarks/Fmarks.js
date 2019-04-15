import React, { Component } from 'react';

import { Badge, Card, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, CardBody, Input, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class FacultyMarks extends Component {
    render() {
        return (

            <Row>
                <Col>
                    <Card>


                        <div className="text-left">
                            <CardHeader>
                                <div className="col-md-12" style={{ textAlign: 'center' }}>
                                    <h6>Faculty Marks Table</h6>
                                </div>
                            </CardHeader>
                        </div>


                        <CardBody>
                            <Table hover bordered striped responsive size="sm" style={{ textAlign: 'center' }}>

                                <thead>
                                    <tr>
                                        <th Colspan="7" >SUMMARY TABLE</th>
                                    </tr>
                                    <tr>
                                        <th>Roll Number</th>
                                        <th>Name</th>
                                        <th>Subject</th>
                                        <th>Date</th>
                                        <th>Attendence</th>
                                        <th colspan="2">Marks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td ></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <th>Mid-1</th>
                                        <th>Mid-2</th>


                                    </tr>
                                    <tr>
                                        <td >16701F0012</td>

                                        <td>Chaman Yallapur</td>
                                        <td Rowspan="7"></td>
                                        <td>9535416585</td>


                                        <td><input type="checkbox" /></td>
                                        <td>KTM 200 Duke</td>
                                        <td> 11/20/18</td>

                                    </tr>
                                    <tr>
                                        <td >16701F0012</td>

                                        <td>Chaman Yallapur</td>
                                        <td>9535416585</td>
                                        <td><input type="checkbox" /></td>
                                        <td>KTM 200 Duke</td>
                                        <td> 11/20/18</td>

                                    </tr>
                                    <tr>
                                        <td >16701F0012</td>

                                        <td>Chaman Yallapur</td>
                                        <td>9535416585</td>
                                        <td><input type="checkbox" /></td>
                                        <td>KTM 200 Duke</td>
                                        <td> 11/20/18</td>

                                    </tr>
                                    <tr>                                        <td >16701F0012</td>

                                        <td>Chaman Yallapur</td>
                                        <td>9535416585</td>
                                        <td><input type="checkbox" /></td>
                                        <td>KTM 200 Duke</td>
                                        <td> 11/20/18</td>

                                    </tr>
                                    <tr>                                        <td >16701F0012</td>

                                        <td>Chaman Yallapur</td>
                                        <td>9535416585</td>
                                        <td><input type="checkbox" /></td>
                                        <td>KTM 200 Duke</td>
                                        <td> 11/20/18</td>

                                    </tr>
                                    <tr>                                        <td >16701F0012</td>

                                        <td>Chaman Yallapur</td>
                                        <td>9535416585</td>
                                        <td><input type="checkbox" /></td>
                                        <td>KTM 200 Duke</td>
                                        <td> 11/20/18</td>

                                    </tr>
                                    <tr>                                        <td >16701F0012</td>

                                        <td>Chaman Yallapur</td>
                                        <td>9535416585</td>
                                        <td><input type="checkbox" /></td>
                                        <td>KTM 200 Duke</td>
                                        <td> 11/20/18</td>

                                    </tr>

                                </tbody>
                            </Table>
                            <div className="col text-right">
                                <button type="button" className=" btn-info btn ml-4 mt-2 applyButton"  >Assign Attendence</button>

                            </div>

                            {/* <nav>
                <Pagination>
                  <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>

                  <PaginationItem disabled><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
              </nav> */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        );
    }
}

export default FacultyMarks;
