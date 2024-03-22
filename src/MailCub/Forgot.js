import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import logo from '../Asserts/Images/logo.png';
import { Link } from 'react-router-dom';
import "../App.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [emailFound, setEmailFound] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const database = ['user1@gmail.com', 'user2@gmail.com']; // Simulated database array

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailFound(database.includes(email));
    };

    const handleResetPassword = () => {
        // Implement logic to reset password
        console.log(`Reset password for ${email} to ${newPassword}`);
    };

    return (
        <>
            <div className="container-fluid ">
                <div className="row">
                    <div className="  col-lg-7">
                        <div className="lo-go">
                            <Link to={`/login`}><img style={{width:"20%"}} className='img-fluid' src={logo} alt="" /></Link>
                        </div>
                        {/* ============= Form ============= */}
                        <div className='container resetpassword-form '>
                            <form onSubmit={handleSubmit}>
                                <h2>Forgot Your Password? </h2>
                                <h6 className='text-success'> Enter your registered email to Reset your password</h6>
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
                                <Button  type="submit" variant="contained" sx={{
                                                backgroundColor: "#00A95A",
                                                '&:hover': {
                                                    backgroundColor: "#00753e",
                                                }}} fullWidth>Submit</Button>
                               
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
                                        <Button sx={{
                                                backgroundColor: "#00A95A",
                                                '&:hover': {
                                                    backgroundColor: "#00753e",
                                                }}} onClick={handleResetPassword} variant="contained" fullWidth>Reset Password</Button>
                                    </div>
                                )}
                                {(!emailFound && email) && <p className='m-2'>No Email Found</p>}
                               
                            </form>
                        </div>
                    </div>
                    {/* ============ Right side Background ============== */}
                    <div className="col-lg-5 background-image d-flex d-none d-lg-flex"></div>

                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
