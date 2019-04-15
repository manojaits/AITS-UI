import React, { Component } from 'react';

import { Badge, Card, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, CardBody, Input, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class StudentMarks extends Component {
  render() {
    return (

      <Row>
        <Col>
          <Card>


            <div className="text-left">
              <CardHeader>
                <div className="row">
                  <div className="col-md-9">
                    <h6>Student Marks Table</h6></div>
                  <div className="col-md-3">
                    <Input type="date" id="date-input" name="date-input" placeholder="date" />
                  </div>

                </div>
              </CardHeader>
            </div>


            <CardBody>
              <Table hover bordered striped responsive size="sm" style={{ textAlign: 'center' }}>

                <thead>
                  <tr>
                    <th Colspan="8">SUMMARY TABLE</th>
                  </tr>
                  <tr>
                    <th>Roll Number</th>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Date</th>
                    <th>Attendence</th>
                    <th colspan="2" >Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td Rowspan="8">16701F0012</td>
                    <td Rowspan="8">Manoj</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <th>Mid-1</th>
                    <th>Mid-2</th>
                  </tr>
                  <tr>
                    <td>Chaman Yallapur</td>
                    <td>9535416585</td>
                    <td>IndiraNagar</td>
                    <td>KTM 200 Duke</td>
                    <td> 11/20/18</td>
                  </tr>
                  <tr>
                    <td>Chaman Yallapur</td>
                    <td>9535416585</td>
                    <td>IndiraNagar</td>
                    <td>KTM 200 Duke</td>
                    <td> 11/20/18</td>
                  </tr>
                  <tr>
                    <td>Chaman Yallapur</td>
                    <td>9535416585</td>
                    <td>IndiraNagar</td>
                    <td>KTM 200 Duke</td>
                    <td> 11/20/18</td>
                  </tr>
                  <tr>
                    <td>Chaman Yallapur</td>
                    <td>9535416585</td>
                    <td>IndiraNagar</td>
                    <td>KTM 200 Duke</td>
                    <td> 11/20/18</td>
                  </tr>
                  <tr>
                    <td>Chaman Yallapur</td>
                    <td>9535416585</td>
                    <td>IndiraNagar</td>
                    <td>KTM 200 Duke</td>
                    <td> 11/20/18</td>
                  </tr>
                  <tr>
                    <td>Chaman Yallapur</td>
                    <td>9535416585</td>
                    <td>IndiraNagar</td>
                    <td>KTM 200 Duke</td>
                    <td> 11/20/18</td>
                  </tr>
                  <tr>
                    <td>Chaman Yallapur</td>
                    <td>9535416585</td>
                    <td>IndiraNagar</td>
                    <td>KTM 200 Duke</td>
                    <td> 11/20/18</td>
                  </tr>

                </tbody>
              </Table>
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

export default StudentMarks;
