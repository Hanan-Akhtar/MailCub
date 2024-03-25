import React from 'react';
import AddCustomer from './AddCustomer';
import GridAutoFlow from './DashBoard';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import DashBoardLayOut from '../Layouts/DashBoardLayOut';
import ForgotPassword from './Forgot';
import { isAuthenticated, login, logout } from './Auth'; 
import ColumnGroupingTable from './Customer'
import Authenticated from '../Layouts/Authentication';

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
        <Route path="/customer" element={<ColumnGroupingTable />} />
        <Route path="/addcustomer" element={<AddCustomer />} />
      </Route>
      <Route element={<Authenticated/>}>
      <Route path="/" element={<Authentication />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path='/forgot' element={<ForgotPassword/>}/>
      </Route>
    </Routes>
  );
};

export default HandleRoutes;
