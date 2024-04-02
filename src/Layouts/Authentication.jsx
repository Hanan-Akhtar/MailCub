import { Outlet } from "react-router";
import { isNotAuthenticated } from '../MailCub/Auth'; 
import { Navigate } from 'react-router-dom';

const PrivateLayout = () => {
  const auth = isNotAuthenticated(); 

  return <>
  {auth ? <Outlet /> : <Navigate to="/dashboard" />}
  </>;
}
 
export default PrivateLayout;
