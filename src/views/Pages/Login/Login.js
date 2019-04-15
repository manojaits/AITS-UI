import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import cookie from 'react-cookies'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isValid: false,
      isLoginSuccessfull: '',
      userName: '',
      userId: '',
      userEmail: '',
      password: '',
      userType: '',
      roleName: ''
    }
  }


  loginCheckFunction = (userEmail, password) => {
    console.log('check', userEmail, password)

    axios.post('http://192.168.1.8:8080/student/login', {
      "userName": userEmail,
      "password": password,
    })
      .then(data => {
        if (data.data.isValid == true) {
          this.setState(
            {
              uservalid: true,
              roleName: data.data.userBean.roleName,
            }
          )
          cookie.save('userType', data.data.userBean.roleName, { path: '/' })
          // this.setLocalStorageForUserName(data.data.userBean.roleName)
        }
        if (data.data.isValid == false) {
          this.setState(
            {
              uservalid: false,
              openSnackBar: true,
              notifyMessage: "Invalid UserName And Password",

            }
          )
        }
      })

  }

  // setLocalStorageForUserName = (userType) => {
  //   // const serialized = JSON.stringify(userType)
  //   localStorage.setItem('userType', userType, { path: '/' });
  // }

  setuserName = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  setPassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }




  loginSuccess() {
  }

  loginFailed() {

    return (
      <div>
        <span><strong>Error!</strong> Authentication error</span> */}
    </div>);
  }


  render() {
    console.log('check username', this.state.roleName)
    if (this.state.roleName == 'student') {
      return (
        <Redirect to={{
          pathname: '/StudentAttendence',
        }} />
      );
    } else if (this.state.roleName == 'Facualty') {

      return (
        <Redirect to={{
          pathname: '/FacultyAttendence',
        }} />);
    } else if (this.state.roleName == 'Admin') {

      return (
        <Redirect to={{
          pathname: '/AdminDashBoard',
        }} />);
    }



    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>

                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" onChange={(e) => this.setuserName(e)} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" onChange={(e) => this.setPassword(e)} />


                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={() => this.loginCheckFunction(this.state.userName, this.state.password)}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Link to="/forgotPassword">

                            <Button color="link" className="px-0" >Forgot password?</Button>
                          </Link>

                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p> AITS Login Form</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
            {/* <MySnackBar
              type='error'
              open={this.state.openSnackBar}
              autoHideDuration={3000}
              onClose={() => {
                this.setState({ openSnackBar: false })
              }}
              message={this.state.notifyMessage}>
            </MySnackBar>

            <MySnackBar
              type='success'
              open={this.state.openSuccessSnackBar}
              autoHideDuration={3000}
              onClose={() => {
                this.setState({ openSuccessSnackBar: false })
              }}
              message={this.state.successMessage}>
            </MySnackBar> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
