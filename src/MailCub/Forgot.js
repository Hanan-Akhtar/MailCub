import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import logo from '../Asserts/Images/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [emailFound, setEmailFound] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [resetSuccess, setResetSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make HTTP request to check if email exists
            const response = await axios.post('http://146.190.164.174:4000/api/app_api/email_verification', { email });
            if (response.status === 200) {
                setEmailFound(true);
            } else {
                setEmailFound(false);
            }
        } catch (error) {
            console.error('Error checking email:', error.response);
        }
    };

    const handleResetPassword = async () => {
        try {
            // Make HTTP request to reset password
            const response = await axios.post('http://146.190.164.174:4000/api/app_api/reset_password', {
                email,
                newPassword,
            });
            if (response.status === 200) {
                setResetSuccess(true);
            } else {
                console.error('Password reset failed:', response.data);
            }
        } catch (error) {
            console.error('Error resetting password:', error);
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="lo-go">
                            <Link to={`/SignIn`}><img style={{width:"20%"}} className='img-fluid' src={logo} alt="" /></Link>
                        </div>
                        <div className='container resetpassword-form'>
                            <form onSubmit={handleSubmit}>
                                <h2>Forgot Your Password?</h2>
                                <h6 className='text-success'>Enter your registered email to reset your password</h6>
                                <div className='mb-3 mt-4'>
                                    <TextField
                                        label="Enter Email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                </div>
                                <Button type="submit" variant="contained" sx={{
                                    backgroundColor: "#00A95A",
                                    '&:hover': {
                                        backgroundColor: "#00753e",
                                    }
                                }} fullWidth>Submit</Button>
                                {emailFound && (
                                    <div className='mt-4'>
                                        <h6 className='text-success'>Enter new password</h6>
                                        <div className='mb-3'>
                                            <TextField
                                                label="New Password"
                                                type="password"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                variant="outlined"
                                                fullWidth
                                                required
                                            />
                                        </div>
                                        <Button onClick={handleResetPassword} variant="contained" sx={{
                                            backgroundColor: "#00A95A",
                                            '&:hover': {
                                                backgroundColor: "#00753e",
                                            }
                                        }} fullWidth>Reset Password</Button>
                                    </div>
                                )}
                                {(!emailFound && email) && <p className='m-2'>No Email Found</p>}
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5 background-image d-flex d-none d-lg-flex"></div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
