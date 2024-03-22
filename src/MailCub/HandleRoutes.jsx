import React from 'react';
import AddCustomer from './AddCustomer';
import GridAutoFlow from './DashBoard';
import Transection from './Transaction';
import SupportTicket from './SpportTicket';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import DashBoardLayOut from '../Layouts/DashBoardLayOut';
import ForgotPassword from './Forgot';
import { isAuthenticated, login, logout } from '../Layouts/Authentication'; // Update with the correct path to your authentication file

const HandleRoutes = () => {

  const Authentication = () => {
    if (isAuthenticated()) {
      return null;
    } else {
      return <Navigate to="/signIn" />;
    }
  };

  return (
    <Routes>
      <Route element={<DashBoardLayOut />}>
        <Route path="/" element={<Authentication />} />
        <Route path="/dashboard" element={<GridAutoFlow />} />
        <Route path="/addcustomer" element={<AddCustomer />} />
        <Route path="/transection" element={<Transection />} />
        <Route path="/supportTicket" element={<SupportTicket />} />
      </Route>
      <Route path="/" element={<Authentication />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path='/forgot' element={<ForgotPassword/>}/>
    </Routes>
  );
};

export default HandleRoutes;
