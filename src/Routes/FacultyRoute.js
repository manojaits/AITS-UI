import React from 'react';
import FacultyAttendence from '../views/FacultyAttendence/FacultyAttendence'
import Fmarks from '../views/Fmarks/Fmarks'

const facultyRoutes = [
    { path: '/Fmarks', exact: true, name: 'Fmarks', component: Fmarks },
    { path: '/FacultyAttendence', name: 'FacultyAttendence', component: FacultyAttendence },

];

export default facultyRoutes;
