import React from 'react';
import DefaultLayout from './containers/DefaultLayout';


// const Charts = React.lazy(() => import('./views/Charts'));
const StudentAttendence = React.lazy(() => import('./views/StudentAttendence/StudentAttendence'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const NewLogin = React.lazy(() => import('./views/NewLogin'));
const FormatGenerator = React.lazy(() => import('./views/FormatGenerator'));
const StudentMarks = React.lazy(() => import('./views/StudentMarks/StudentMarks'));
const FacultyAttendence = React.lazy(() => import('./views/FacultyAttendence/FacultyAttendence'));
const Fmarks = React.lazy(() => import('./views/Fmarks/Fmarks'));
const AdminDashBoard = React.lazy(() => import('./views/AdminDashBoard/AdminDashBoard'));
// const MySnackBar = React.lazy(() => import('./views/MySnackBar/MySnackBar'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/StudentAttendence', name: 'StudentAttendence', component: StudentAttendence },
  { path: '/Fmarks', exact: true, name: 'Fmarks', component: Fmarks },
  // { path: '/MySnackBar', name: 'MySnackBar', component: MySnackBar },
  { path: '/AdminDashBoard', name: 'AdminDashBoard', component: AdminDashBoard },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/new-login', name: 'New Login', component: NewLogin },
  { path: '/format-generator', name: 'Format Generator', component: FormatGenerator },
  { path: '/StudentMarks', name: 'StudentMarks', component: StudentMarks },
  { path: '/FacultyAttendence', name: 'FacultyAttendence', component: FacultyAttendence },

];

export default routes;
