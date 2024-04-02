import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddCustomer from './AddCustomer';
import GridAutoFlow from './DashBoard';
import SignUp from './SignUp';
import SignIn from './SignIn';
import DashBoardLayOut from '../Layouts/DashBoardLayOut';
import ForgotPassword from './Forgot';
import ColumnGroupingTable from './Customer';
import Authenticated from '../Layouts/Authentication';





const HandleRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<DashBoardLayOut />}>
        <Route path="/" element={<GridAutoFlow />} />
        <Route path="/dashboard" element={<GridAutoFlow />} />
        <Route path="/customer" element={<ColumnGroupingTable />} />
        <Route path="/addcustomer" element={<AddCustomer />} />
      </Route>
      <Route element={<Authenticated />}>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
};

export default HandleRoutes;
