import React from 'react';
// import DefaultLayout from './containers/DefaultLayout';
import StudentAttendence from '../views/StudentAttendence/StudentAttendence'
import StudentMarks from '../views/StudentMarks/StudentMarks'

const studentRoutes = [
    // { path: '/', exact: true, name: 'Home', component: DefaultLayout },
    { path: '/StudentAttendence', name: 'StudentAttendence', component: StudentAttendence },
    { path: '/StudentMarks', name: 'StudentMarks', component: StudentMarks },
];

export default studentRoutes;
