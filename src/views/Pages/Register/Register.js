import React, { Component } from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';

import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Register extends Component {


  // getInitialState() {
  //   return {
  //     companies: [
  //       { name: 'CIVIL', jobs: ['job1-1', 'job1-2', 'job1-3'] },
  //       { name: 'CSE', jobs: ['job2-1', 'job2-2', 'job2-3'] },
  //       { name: 'IT', jobs: ['job3-1', 'job3-2', 'job3-3'] }
  //     ],
  //     selectedCompany: 'company1'
  //   }
  // }

  // handleChange(e) {
  //   console.log(this.state)
  //   this.setState({ selectedCompany: e.target.value })
  // }

  // selectBranchBySems = {
  //   CIVIL: ["Select Year", "1-YEAR", "2-YEAR 1-SEM", "2-YEAR 2-SEM", "3-YEAR 1-SEM", "3-YEAR 2-SEM", "4-YEAR 1-SEM", "4-YEAR 2-SEM"],
  //   CSE: ["Select Year", "1-YEAR", "2-YEAR 1-SEM", "2-YEAR 2-SEM", "3-YEAR 1-SEM", "3-YEAR 2-SEM", "4-YEAR 1-SEM", "4-YEAR 2-SEM"],
  //   IT: ["Select Year", "1-YEAR", "2-YEAR 1-SEM", "2-YEAR 2-SEM", "3-YEAR 1-SEM", "3-YEAR 2-SEM", "4-YEAR 1-SEM", "4-YEAR 2-SEM"],
  //   EEE: ["Select Year", "1-YEAR", "2-YEAR 1-SEM", "2-YEAR 2-SEM", "3-YEAR 1-SEM", "3-YEAR 2-SEM", "4-YEAR 1-SEM", "4-YEAR 2-SEM"],
  //   ECE: ["Select Year", "1-YEAR", "2-YEAR 1-SEM", "2-YEAR 2-SEM", "3-YEAR 1-SEM", "3-YEAR 2-SEM", "4-YEAR 1-SEM", "4-YEAR 2-SEM"],
  //   MECH: ["Select Year", "1-YEAR", "2-YEAR 1-SEM", "2-YEAR 2-SEM", "3-YEAR 1-SEM", "3-YEAR 2-SEM", "4-YEAR 1-SEM", "4-YEAR 2-SEM"],
  //   MBA: ["Select Year", "1-YEAR 1-SEM", "1-YEAR 2-SEM", "2-YEAR 1-SEM", "2-YEAR 2-SEM"],
  //   MCA: ["Select Year", "1-YEAR 1-SEM", "1-YEAR 2-SEM", "2-YEAR 1-SEM", "2-YEAR 2-SEM", "3-YEAR 1-SEM"],
  //   MTECH: ["Select Year", "1-YEAR 1-SEM", "1-YEAR 2-SEM"],
  // }


  render() {

    // let company = this.state.companies.filter(company => {
    //   return company.name === this.state.selectedCompany
    // })


    return (
      <div className="app flex-row align-items-center">
        <Container>

          <div class="bg-img">
            <form action="LoginController" class="container" method="post">
              <h2 align="center">SignUp</h2>

              <div class="row">

                <div class="col-6">
                  <div class="form-group">
                    <label for="usertype"><b>Select UserType</b></label> <select
                      class="form-control" id="type" name="usertype">
                      <option>---Select User Type---</option>
                      <option>Student</option>
                      <option>Faculty</option>
                      <option>Admin</option>
                    </select>
                  </div>
                </div>




                <div class="col-6">

                  <label for="userId"><b>Enter Your ID</b></label> <input type="text"
                    placeholder="Enter Your ID" maxlength="10" name="rollNo"
                    required="required" alt="enter your roll no" />
                  <div class="help-block with-errors"></div>
                </div>



                <div class="col-6">
                  <label for="userName"><b>User Name</b></label> <input type="text"
                    placeholder="Enter Your Name" name="name" required />
                </div>



                <div class="col-6">
                  <div class="form-group">
                    <label for="gender"><b>Select Gender</b></label> <select
                      class="form-control" id="gendertype" name="usergender">
                      <option>---Select Gender---</option>
                      <option>Male</option>
                      <option>FeMale</option>
                    </select>
                  </div>
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
                  <div class="form-group">
                    <label for="selectBranch"><b>Select Branch</b></label>
                    <select
                      class="form-control" id="selectBranch" name="selectBranch"
                      onChange={(e) => this.setState({ selectedView: e.target.value })}>
                      <option value="">---Select Branch---</option>
                      <option value="CIVIL">CIVIL</option>
                      <option value="CSE">CSE</option>
                      <option value="IT">IT</option>
                      <option value="EEE">EEE</option>
                      <option value="ECE">ECE</option>
                      <option value="MECH">MECH</option>
                      <option value="MBA">MBA</option>
                      <option value="MCA">MCA</option>
                      <option value="MTECH">MTECH</option>
                    </select>
                    {/* <select value={this.state.selectedCompany} onChange={this.handleChange.bind(this)}>
                      {
                        this.state.companies.map((company, i) => {
                          return <option>{company.name}</option>
                        })
                      }
                    </select> */}

                    {/* {this.getMajorMethod()} */}

                  </div>
                </div>

                <div class="col-6">
                  <div class="form-group">
                    <label for="selectBranch"><b>Select Year</b></label>
                    <select
                      class="form-control" id="year" name="year">

                      <option value="" disabled selected>Select Year</option>
                    </select>
                    {/* <select>
                      {

                        company[0].jobs.map((job, i) => {
                          return <option>{job}</option>
                        })
                      }
                    </select> */}

                  </div>
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
                  <Link to="/Login">

                    <button type="button" className="btn-info btn ml-2 lg-3 md-4 sm-4 sx-4 mt-2">SignUp </button>
                  </Link>

                  <Link to="/Login">

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

export default Register;
