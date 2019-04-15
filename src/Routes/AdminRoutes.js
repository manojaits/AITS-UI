import React from 'react';
import FacultyAttendence from '../views/FacultyAttendence/FacultyAttendence'
import Fmarks from '../views/Fmarks/Fmarks'
import StudentAttendence from '../views/StudentAttendence/StudentAttendence'
import StudentMarks from '../views/StudentMarks/StudentMarks'
import AdminDashBoard from '../views/AdminDashBoard/AdminDashBoard'
const routes = [
    { path: '/StudentAttendence', name: 'StudentAttendence', component: StudentAttendence },
    { path: '/Fmarks', exact: true, name: 'Fmarks', component: Fmarks },

    { path: '/AdminDashBoard', name: 'AdminDashBoard', component: AdminDashBoard },

    { path: '/StudentMarks', name: 'StudentMarks', component: StudentMarks },
    { path: '/FacultyAttendence', name: 'FacultyAttendence', component: FacultyAttendence },

];

export default routes;
