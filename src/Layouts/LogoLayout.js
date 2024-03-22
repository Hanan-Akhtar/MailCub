import { Outlet } from 'react-router';
import logo from "../Asserts/Images/logo.png"
const LogoLayout = () => {
    return ( <>
    <img src={logo} style={{width:"20%"}}/>
    <Outlet/>
    </> );
}
 
export default LogoLayout;