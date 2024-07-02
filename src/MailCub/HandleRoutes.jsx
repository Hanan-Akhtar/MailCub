import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddCustomer from './AddCustomer';
import GridAutoFlow from './DashBoard';
import SignUp from './SignUp';
import SignIn from './SignIn';
import PrivateLayout from '../Layouts/DashBoardLayOut';
import ForgotPassword from './Forgot';
import ColumnGroupingTable from './Customer';
import PublicLayout from '../Layouts/Authentication';





const HandleRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<PrivateLayout />}>
        <Route path="/dashboard" element={<GridAutoFlow />} />
        <Route path="/customer" element={<ColumnGroupingTable />} />
        <Route path="/addcustomer" element={<AddCustomer />} />
      </Route>
      <Route element={<PublicLayout />}>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
};

export default HandleRoutes;
