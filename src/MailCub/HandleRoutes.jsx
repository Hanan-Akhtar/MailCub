import React from 'react';
import AddCustomer from './AddCustomer';
import DashBoard from './DashBoard';
import Transection from './Transaction';
import SupportTicket from './SpportTicket';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import DashBoardLayOut from '../Layouts/DashBoardLayOut';

const HandleRoutes = () => {
  const dummyTokenArray = ['dummyToken123', 'anotherDummyToken456'];

  const Authentication = () => {
    const storedToken = localStorage.getItem("token");

    if (storedToken && (dummyTokenArray.includes(storedToken) || storedToken.startsWith('dummy'))) {
      return null; 
    } else {
      return <Navigate to="/signIn" />;
    }
  };

  return (
    <Routes>
      <Route element={<DashBoardLayOut />}>
        <Route path="/" element={<Authentication />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/addcustomer" element={<AddCustomer />} />
        <Route path="/transection" element={<Transection />} />
        <Route path="/supportTicket" element={<SupportTicket />} />
      </Route>
      <Route path="/" element={<Authentication />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default HandleRoutes;
