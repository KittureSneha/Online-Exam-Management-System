import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Login from './Login';
import Header from './SuperAdmin/Header';
import Footer from './SuperAdmin/Footer';
import AddCenter from './SuperAdmin/DashBoard/AddCenter';
import AllCenters from './SuperAdmin/DashBoard/AllCenters';
import Exam from './SuperAdmin/DashBoard/Exam';
import Manage from './SuperAdmin/DashBoard/Manage';
import AdminDash from './Admin/AdminDash';
import AManage from './Admin/AManage';
import StudentDashboard from './Student/StudentDashboard';
import StudentExam from './Student/StudentExam';
import StudentLogin from './Student/StudentLogin';
import { StudentProvider } from './Admin/StudentContext';
import { CenterProvider } from './SuperAdmin/DashBoard/CenterContext';
import StudentDetails from './Admin/StudentDetails';
import Edit from './Admin/Edit';
import Certificate from './Admin/Certificate';


function App() {
  return (
    <>
      <Header />
      <CenterProvider>
      <StudentProvider>
       
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/AddCenter" element={<AddCenter />} />
        <Route path="/AllCenters" element={<AllCenters />} />
        <Route path="/Exam" element={<Exam />} />
        <Route path="/Manage" element={<Manage />} />
        <Route path="/AdminDash" element={<AdminDash/>} />
        <Route path="/AManage" element={<AManage/>} /> 
        <Route path="/StudentDashboard/:id" element={<StudentDashboard/>} /> 
        <Route path="/StudentExam/:id" element={<StudentExam/>} /> 
        <Route path="/StudentLogin" element={<StudentLogin/>} />
        <Route path="/StudentDetails" element={<StudentDetails/>} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/Certificate/:id" element={<Certificate />} />

        
        
      </Routes>
      </StudentProvider>
      </CenterProvider>
      
      <Footer />
    </>
  );
}

export default App;
