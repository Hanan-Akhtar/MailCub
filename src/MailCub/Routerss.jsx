import React from 'react';
import { BrowserRouter as  Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';

const  Routers = () => {
  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
  );
}

export default Routers;
