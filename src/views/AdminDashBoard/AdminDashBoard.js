import React, { Component } from 'react';
import Picky from 'react-picky';
import 'react-picky/dist/picky.css';
import * as _ from 'lodash'

import { Badge, Card, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, CardBody, Input, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class AdminDashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            branchList: [],
            branchTypeSelected: 'Select Branch',
            yearList: [],
            yearTypeSelected: 'Select Year',
            rollNumber: ''
        }
        this.branchList();
        this.branchTypeNames = [];
        this.yearList();
        this.yearTypeNames = [];
        this.selectBranchTypeOption = this.selectBranchTypeOption.bind(this);
        this.selectYearTypeOption = this.selectYearTypeOption.bind(this);

    }
    branchList = () => {
        this.branchTypes = [
            {
                'type': 'CSE'
            },

            {
                'type': 'Civil'
            },
            {
                'type': 'ECE'
            },
            {
                'type': 'ECE'
            },
            {
                'type': 'ECE'
            },
            {
                'type': 'ECE'
            },
            {
                'type': 'ECE'
            }
        ]
        this.state.branchList = this.branchTypes
    }
    yearList = () => {
        this.yearTypes = [
            {
                'year': 'CSE'
            },

            {
                'year': 'Civil'
            },
            {
                'year': 'ECE'
            },
            {
                'year': 'ECE'
            },
            {
                'year': 'ECE'
            },
            {
                'year': 'ECE'
            },
            {
                'year': 'ECE'
            }
        ]
        this.state.yearList = this.yearTypes
    }

    selectBranchTypeOption = (value) => {
        this.setState({
            branchTypeSelected: value,
            type: value
        })

    }
    selectYearTypeOption = (value) => {
        this.setState({
            yearTypeSelected: value,
            year: value
        })

    }
    sortAndMapIncomingData = (list, sortValue) => {
        var sortedData = [];
        sortedData = _.orderBy(list, sortValue, ['asc'])
        var mappedValues = _.map(sortedData, sortValue)
        return mappedValues;
    }
    handleChange(event) {
        let id = event.target.id;
        let eventValue = event.target.value;
        if (id == "rollNumber") {

            console.log(event.target.value);
            this.setState({ rollNumber: eventValue });

        }

    }

    render() {
        if (this.state.branchList.length) {
            this.branchTypeNames = this.sortAndMapIncomingData(this.state.branchList, 'type')
        }
        if (this.state.yearList.length) {
            this.yearTypeNames = this.sortAndMapIncomingData(this.state.yearList, 'year')
        }


        return (
            <div>
                <Row>
                    <Col>
                        <Card>


                            <div className="text-left">
                                <CardHeader>
                                    <div className="row">
                                        <div className="col-md-12" style={{ textAlign: 'center' }}>
                                            <h6>Attendence Table</h6>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="row mt-2">

                                                    <div className="col-lg-3 md-3 sm-3">
                                                        <Picky
                                                            options={this.branchTypeNames}
                                                            value={this.state.branchTypeSelected}
                                                            multiple={false}
                                                            includeSelectAll={false}
                                                            includeFilter={true}
                                                            onChange={this.selectBranchTypeOption}
                                                            dropdownHeight={300}
                                                            keepOpen={false}
                                                            defaultFocusFilter={true}
                                                        />
                                                    </div>
                                                    <div className="col-lg-3 md-3 sm-3">
                                                        <Picky
                                                            options={this.yearTypeNames}
                                                            value={this.state.yearTypeSelected}
                                                            multiple={false}
                                                            includeSelectAll={false}
                                                            includeFilter={true}
                                                            onChange={this.selectYearTypeOption}
                                                            dropdownHeight={300}
                                                            keepOpen={false}
                                                            defaultFocusFilter={true}
                                                        />
                                                    </div>
                                                    <div className="col-lg-3 md-3 sm-3">

                                                        <Input type="date" id="date-input" name="date-input" placeholder="date" />
                                                    </div>
                                                    <div className="col-lg-3 md-3 sm-3">

                                                        <Input type="date" id="date-input" name="date-input" placeholder="date" />
                                                    </div>
                                                </div>

                                                <div className="row mt-3">
                                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                                        <div className="col input-group">
                                                            <input type="text" className="form-control" placeholder="Search by Name" value={this.state.nameValue} />
                                                            <div className="input-group-append">
                                                                <button className="btn btn-primary" type="button" >
                                                                    <i className="fa fa-search"></i>
                                                                </button>
                                                            </div>
                                                        </div>                                                    </div>
                                                    <div className="col-lg-2 md-2 sm-2">

                                                        <button type="button" className=" btn-success btn ml-4  applyButton" ><i className="fa fa-check-circle-o mr-2 pl-0"> </i>Apply All</button>
                                                    </div>
                                                    <div className="col-lg-2 md-2 sm-2">

                                                        <button type="button" className=" btn-warning btn ml-4  applyButton" ><i className=" fa fa-refresh mr-2"> </i>Clear All</button>
                                                    </div>



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
            </div >

        );
    }
}

export default AdminDashBoard;
