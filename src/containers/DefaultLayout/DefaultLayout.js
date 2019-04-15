import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import StudentNav from '../../StudentNav'
import FacualtyNav from '../../FacualtyNav'
import cookie from 'react-cookies'

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
// import routes from '../../routes';
import studentRoutes from '../../Routes/StudentRoutes'
import facultyRoute from '../../Routes/FacultyRoute'
import adminRoutes from '../../Routes/AdminRoutes'
const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  constructor(props) {
    super(props)
    // this.getUserType()
    // this.state = {
    //   userType: ''
    // }

    // this.getUserType()
  }

  componentWillMount = () => {
    // this.userType = ''
    // this.userType = localStorage.getItem('userType')
    // console.log('check usera and tyoe', this.userType)
    this.state = {
      userType: cookie.load('userType')
    }
  }

  // getUserType = () => {
  //   // var check = localStorage.getItem('userType')

  // }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    console.log('check usera and tyoe', this.userType)
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              {
                this.state.userType == 'student' ? (
                  <AppSidebarNav navConfig={StudentNav} {...this.props} />
                ) : null

              }

              {
                this.state.userType == 'Facualty' ? (
                  <AppSidebarNav navConfig={FacualtyNav} {...this.props} />
                ) : null

              }

              {
                this.state.userType == 'Admin' ? (
                  <AppSidebarNav navConfig={navigation} {...this.props} />
                ) : null

              }

            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>

          {
            this.state.userType == 'student' ? (
              <main className="main">
                <AppBreadcrumb appRoutes={studentRoutes} />
                <Container fluid>
                  <Suspense fallback={this.loading()}>
                    <Switch>

                      {studentRoutes.map((route, idx) => {
                        return route.component ? (
                          <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                              <route.component {...props} />
                            )} />
                        ) : (null);
                      })}
                      <Redirect from="/" to="/login" />
                    </Switch>
                  </Suspense>
                </Container>
              </main>
            ) : null
          }


          {
            this.state.userType == 'Facualty' ? (
              <main className="main">
                <AppBreadcrumb appRoutes={facultyRoute} />
                <Container fluid>
                  <Suspense fallback={this.loading()}>
                    <Switch>

                      {facultyRoute.map((route, idx) => {
                        return route.component ? (
                          <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                              <route.component {...props} />
                            )} />
                        ) : (null);
                      })}
                      <Redirect from="/" to="/login" />
                    </Switch>
                  </Suspense>
                </Container>
              </main>
            ) : null
          }



          {
            this.state.userType == 'Admin' ? (
              <main className="main">
                <AppBreadcrumb appRoutes={adminRoutes} />
                <Container fluid>
                  <Suspense fallback={this.loading()}>
                    <Switch>

                      {adminRoutes.map((route, idx) => {
                        return route.component ? (
                          <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                              <route.component {...props} />
                            )} />
                        ) : (null);
                      })}
                      <Redirect from="/" to="/login" />
                    </Switch>
                  </Suspense>
                </Container>
              </main>
            ) : null
          }


          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
