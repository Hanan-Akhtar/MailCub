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
import axios from 'axios';
import brnadlogo from '../Asserts/Images/logo.png';
import { useState } from "react";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false); 

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSignIn = () => {
        setLoading(true); 
    
        // Your sign-in logic goes here
        const email = document.getElementById('outlined-basic').value; 
        const password = document.getElementById('outlined-adornment-password').value; 
    
        axios.post("https://schema.getpostman.com/json/collection/v2.1.0/collection.json", { email, password })
            .then(response => {
                console.log('Sign-in successful:', response.data);
                setLoading(false); 
            })
            .catch(error => {
                console.error('Sign-in error:', error);
                setLoading(false); 
            });
    };
    return (
        <>
            <div className="row">
                <div className="col-lg-7 d-flex " style={{ alignItems: "center" }}>
                    <div className="container ">
                        <div className="logo">
                            <img src={brnadlogo} style={{ width: "20%" }} alt="brand logo" />
                        </div>
                        <div className="sign-in">
                            <div>
                                <h2>Sign in to your Mailcub account</h2>
                                <p>Don't have an account yet ? <Link className="links greenColor" to={"/signup"}>Sign up</Link></p>
                            </div>
                            <form>
                                <div className="d-flex justify-content-center">
                                    <TextField fullWidth className="email" sx={{
                                        '& label.Mui-focused': {
                                            color: '#00A95A',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#00A95A',
                                            },
                                        },
                                    }} id="outlined-basic" label="Email" type="email" variant="outlined" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <FormControl fullWidth sx={{
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
                                </div>
                                <Link className="greenColor links forgot" >Forgot your password ?</Link>

                                <div className="d-flex justify-content-center">
                                    {loading ? (
                                        // Add Bootstrap spinner
                                        <div className="spinner-border text-success" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    ) : (
                                        <Link to="/dashboard">
                                            <Button onClick={handleSignIn} variant="contained" sx={{
                                                backgroundColor: "#00A95A", marginTop: "20px", width: '50ch',
                                                '&:hover': {
                                                    backgroundColor: "#00753e",
                                                },
                                            }}>Sign in</Button>
                                        </Link>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 background-image d-flex d-none d-lg-flex"></div>
            </div>
        </>
    );
}

export default SignIn;
