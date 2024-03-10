import "../App.css";
import { Link } from "react-router-dom";
import * as React from 'react';
import { TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import brnadlogo from '../Asserts/Images/logo.png'

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (<>

        <div className="row">
            <div className="col-lg-7 ">
            <div className="container logo"><img src={brnadlogo}/></div>
                <div className="container sign-in">
               <div className="w-50">
               <h2>Sign in to your Mailcub account</h2>
                    <p>Don't have and account yet ? <Link className="links greenColor" to={"/signup"}>Sign up</Link></p>
                    <TextField className="email" sx={{
                        width: '35ch',
                        '& label.Mui-focused': {
                            color: '#00A95A', // Change label color when focused
                        },
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: '#00A95A',
                            },
                        },
                    }} id="outlined-basic" label="Email" type="email" variant="outlined" />
                    <FormControl sx={{
                        width: '35ch',
                        '& label.Mui-focused': {
                            color: '#00A95A',
                        },
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: '#00A95A',
                            },
                        },
                    }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Link className="greenColor links forgot" style={{ marginLeft: "172px" }}>Forgot your password ?</Link>
                    <div>
                        <Button variant="contained" sx={{
                            backgroundColor: "#00A95A", marginTop: "20px", width: '44ch',
                            '&:hover': {
                                backgroundColor: "#00753e", 
                            },
                        }}>Sign in</Button>
                    </div>
               </div>
                   
                </div>
            </div>
            <div className="col-lg-5 background-image d-flex d-none d-lg-flex"></div>
        </div>






    </>);
}

export default Login;