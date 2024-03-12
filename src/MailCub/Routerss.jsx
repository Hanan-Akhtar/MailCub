import Login from "./Login";
import  SignUp  from "./SignUp";
import { Route,Routes } from "react-router";


function Routers() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>       
      </Routes>
      
    </>
  );
}

export default Routers;
