import AddCustomer from "./MailCub/AddCustomer";
import Login from "./MailCub/Login";
import  SignUp  from "./MailCub/SignUp";
import { Route,Routes } from "react-router";


function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>       
      </Routes>
      
    </>
  );
}

export default App;
