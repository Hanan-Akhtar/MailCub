import { Outlet, Navigate } from "react-router";
import { styled } from "@mui/material";
import ResponsiveDrawer from "../MailCub/ClippedDrawer";
import { isAuthenticated } from '../MailCub/Auth'; 


const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
        paddingTop: APP_BAR_DESKTOP + 24,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));

const PrivateLayout = () => {
    const auth = isAuthenticated(); 
  
    return (
        <StyledRoot>
            <ResponsiveDrawer />
            <Main>
                {auth ? <Outlet /> : <Navigate to='/signIn' />}
            </Main>
        </StyledRoot>
    );
}

export default PrivateLayout;
