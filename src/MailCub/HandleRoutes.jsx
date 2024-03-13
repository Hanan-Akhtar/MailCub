import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import ClippedDrawer from './MainProfile';
import AddCustomer from './AddCustomer';
import DashBoard from './DashBoard';
import SpportTicket from './SpportTicket';
import Transection from './Transaction';

const RoutesComponent = () => {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <Routes>
      <Route path="/dashboard" element={<ClippedDrawer heading="Dashboard"><DashBoard /></ClippedDrawer>} />
      <Route path="/addcustomer" element={<ClippedDrawer heading="Add Customer"><AddCustomer /></ClippedDrawer>} />
      <Route path="/spportTicket" element={<ClippedDrawer heading="Support Ticket"><SpportTicket /></ClippedDrawer>} />
      <Route path="/transection" element={<ClippedDrawer heading="Transaction"><Transection /></ClippedDrawer>} />
    </Routes>
    
  );
};

export default RoutesComponent;
