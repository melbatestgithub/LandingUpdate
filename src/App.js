import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";
import Body from "./components/body/Body";
import Main from "./landing/Main";
import Dashboard from "./Dashboard";
import StaffDashboard from "./StaffDashboard";
import Login from "./landing/Login";
import SignUp from "./landing/SignUp";
import ForgotPassword from "./landing/ForgotPassword";
import ResetPassword from "./landing/ResetPassword";

function App() {
  const user = false

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* Protected Routes */}
       
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/ItStaffMembers/*" element={<StaffDashboard />} /> 
          <Route path="/login" element={<Login />} />
      
        {/* Public Routes */}
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
