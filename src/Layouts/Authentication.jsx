import { Outlet } from "react-router";
import { isNotAuthenticated } from '../MailCub/Auth'; 
import { Navigate } from 'react-router-dom';

const PublicLayout = () => {
  const auth = isNotAuthenticated(); 

  return <>
  {auth ? <Outlet /> : <Navigate to="/dashboard" />}
  </>;
}
 
export default PublicLayout;
