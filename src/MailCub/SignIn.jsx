import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import * as React from 'react';
import { TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import axios from 'axios';
import brandlogo from '../Asserts/Images/logo.png';
import { useState } from "react";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSignIn = async (event) => {
        event.preventDefault();

        setEmailError('');
        setPasswordError('');

        let newEmailError = '';
        let newPasswordError = '';

        if (!email) {
            newEmailError = 'Email is required.';
        }

        if (!password) {
            newPasswordError = 'Password is required.';
        }

        setEmailError(newEmailError);
        setPasswordError(newPasswordError);

        if (newEmailError || newPasswordError) {
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post("http://146.190.164.174:4000/api/app_api/login", {
                email:email,
                password:password
            });
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                console.log('Sign-in successful:', response.data);
                navigate('/dashboard');

            } else {
                console.error('Error fetching data:', response.statusText);
            }
        } catch (error) {
            console.error('Sign-in error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-lg-7 d-flex " style={{ alignItems: "center" }}>
                    <div className="container ">
                        <div className="logo">
                            <img src={brandlogo} style={{ width: "20%" }} alt="brand logo" />
                        </div>
                        <div className="sign-in">
                            <div>
                                <div>
                                    <h2>Sign in to your Mailcub account</h2>
                                    <p>Don't have an account yet ? <Link className="links greenColor" to={"/signup"}>Sign up</Link></p>
                                </div>
                                <form onSubmit={handleSignIn}>
                                    <div className="input-container">
                                        <TextField
                                            fullWidth
                                            className="email"
                                            error={!!emailError}
                                            helperText={emailError}
                                            sx={{
                                                '& label.Mui-focused': {
                                                    color: '#00A95A',
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: '#00A95A',
                                                    },
                                                },
                                            }}
                                            id="outlined-basic"
                                            label="Email"
                                            type="email"
                                            variant="outlined"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                setEmailError('');
                                            }}
                                        />

                                    </div>
                                    <div className="input-container">
                                        <FormControl
                                            fullWidth
                                            sx={{
                                                '& label.Mui-focused': {
                                                    color: '#00A95A',
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: '#00A95A',
                                                    },
                                                },
                                            }}
                                            variant="outlined"
                                            error={!!passwordError}
                                        >
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
                                                value={password}
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                    setPasswordError('');
                                                }}
                                            />
                                        </FormControl>
                                        {passwordError && <p className="error-message">{passwordError}</p>}
                                    </div>
                                    <Link to="/forgot" className="greenColor links forgot" >Forgot your password ?</Link>

                                    <div className="d-flex justify-content-center">
                                        {loading ? (
                                            <div className="spinner-border text-success" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        ) : (
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                fullWidth
                                                sx={{
                                                    backgroundColor: "#00A95A",
                                                    marginTop: "20px",
                                                    '&:hover': {
                                                        backgroundColor: "#00753e",
                                                    },
                                                }}
                                            >
                                                Sign in
                                            </Button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 background-image d-flex d-none d-lg-flex"></div>
            </div>
        </>
    );
}

export default SignIn;
