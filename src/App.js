import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});

// Pages
const Login = Loadable({
  loader: () => import('./views/Pages/Login'),
  loading
});

const Register = Loadable({
  loader: () => import('./views/Pages/Register'),
  loading
});
const ForgotPassword = Loadable({
  loader: () => import('./views/Pages/ForgotPassword/ForgotPassword'),
  loading
});
const ResetPassword = Loadable({
  loader: () => import('./views/Pages/ResetPassword/ResetPassword'),
  loading
});
const EditProfile = Loadable({
  loader: () => import('./views/Pages/EditProfile/EditProfile'),
  loading
});


const Page404 = Loadable({
  loader: () => import('./views/Pages/Page404'),
  loading
});

const Page500 = Loadable({
  loader: () => import('./views/Pages/Page500'),
  loading
});

class App extends Component {

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path='/ForgotPassword' name='ForgotPassword' component={ForgotPassword} />
          <Route exact path='/ResetPassword' name='ResetPassword' component={ResetPassword} />
          <Route exact path='/EditProfile' name='EditProfile' component={EditProfile} />

          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
