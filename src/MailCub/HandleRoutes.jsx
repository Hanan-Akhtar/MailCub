import React from 'react';
import AddCustomer from './AddCustomer';
import GridAutoFlow from './DashBoard';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import DashBoardLayOut from '../Layouts/DashBoardLayOut';
import ForgotPassword from './Forgot';
import { isAuthenticated } from './Auth'; 
import ColumnGroupingTable from './Customer'
import Authenticated from '../Layouts/Authentication';
import EditCustomer from './EditCustomer';

const HandleRoutes = () => {

  const Authentication = ({ path }) => {
    if (isAuthenticated()) {
      return null;
    } else {
      if (path !== '/signIn') {
       
        return <Navigate to="/signIn" />;
      } else {
        return null; 
      }
    }
  };
  const PrivateRoute = ({ element, ...props }) => {
    return isAuthenticated() ? (
      <Route {...props} element={element} />
    ) : (
      <Navigate to="/signIn" replace />
    );
  };

  return (
    <Routes>
      <Route element={<DashBoardLayOut />}>
        <Route path="/" element={<Authentication />} />
        <Route path="/dashboard" element={<GridAutoFlow />} />
        <Route path="/customer" element={<ColumnGroupingTable />} />
        <Route path="/addcustomer" element={<AddCustomer />} />
        <Route path="/edit-customer/:customerId" element={<EditCustomer />} />
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
