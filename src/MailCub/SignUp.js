import * as React from 'react';
import { TextField, Avatar } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import brandLogo from '../Asserts/Images/logo.png';

const SignUp = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [passwordValidation, setPasswordValidation] = React.useState({
        lowercase: false,
        uppercase: false,
        number: false,
        length: false,
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (event) => {
        const password = event.target.value;
        const lowercaseRegex = /[a-z]/g;
        setPasswordValidation((prev) => ({ ...prev, lowercase: password.match(lowercaseRegex) !== null }));
        const uppercaseRegex = /[A-Z]/g;
        setPasswordValidation((prev) => ({ ...prev, uppercase: password.match(uppercaseRegex) !== null }));
        const numberRegex = /[0-9]/g;
        setPasswordValidation((prev) => ({ ...prev, number: password.match(numberRegex) !== null }));
        setPasswordValidation((prev) => ({ ...prev, length: password.length >= 8 }));
    };
    return (<>
        <div className="row">
            <div className="col-lg-7 container ">
                <img className="logo" src={brandLogo} />
                <div className="sign-up">
                    <div className="w-50 heading">
                        <h2>Get Started with a Forever Free plan</h2>
                        <p>Sign up in a seconds. no credit card required.</p>
                        <TextField className="first-name" sx={{
                            width: '45ch',
                            '& label.Mui-focused': {
                                color: '#00A95A',
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00A95A',
                                },
                            },
                        }} id="outlined-basic" label="First Name" type="text" variant="outlined" required />
                        <TextField className="last-name" sx={{
                            width: '45ch',
                            '& label.Mui-focused': {
                                color: '#00A95A',
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00A95A',
                                },
                            },
                        }} id="outlined-basic" label="Last Name" type="text" variant="outlined" />
                        <TextField className="email" sx={{
                            width: '45ch',
                            '& label.Mui-focused': {
                                color: '#00A95A',
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00A95A',
                                },
                            },
                        }} id="outlined-basic" label="Email" type="email" variant="outlined" required />
                        <TextField className="phoneNumber" sx={{
                            width: '45ch',
                            '& label.Mui-focused': {
                                color: '#00A95A',
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00A95A',
                                },
                            },
                        }} id="outlined-basic" label="Email" type="number" variant="outlined" required />
                        <FormControl
                            className="password"
                            sx={{
                                width: '45ch',
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
                                onChange={handlePasswordChange} // Handle password change event
                            />
                        </FormControl>
                    </div>
                    <div className='password-valitation'>
                <div className='row'><div className='d-flex col-8'> <div className={`password-circle ${passwordValidation.lowercase ? 'valid' : 'invalid'}`}>
                    </div>
                        <p> One lowercase Character</p>
                    </div>
                        <div className='d-flex col-4'><div className={`password-circle ${passwordValidation.number ? 'valid' : 'invalid'}`}>
                        </div>
                            <p>One number</p>
                        </div>
                    </div>
                    <div className='row'><div className='d-flex col-7'> <div className={`password-circle ${passwordValidation.uppercase ? 'valid' : 'invalid'}`}>
                    </div>
                        <p> One uppercase Character</p></div>
                        <div className='d-flex col-5'>
                            <div className={`password-circle ${passwordValidation.length ? 'valid' : 'invalid'}`}>
                            </div>
                            <div>8 character minimum</div>
                        </div>
                    </div>
                </div>
                    <p>By clicking , you agree to Terms of use,Privacy policy and Anti-spam policy</p>
                    <div className="create-account">
                        <Button variant="contained" sx={{
                            backgroundColor: "#00A95A", marginTop: "20px", width: '44ch',
                            '&:hover': {
                                backgroundColor: "#00753e",
                            },
                        }}>Create My Account</Button>
                    </div>
                </div>

            </div>
            <div className="col-lg-5 Advance-feature d-flex d-none d-lg-flex">
                <div className="container">
                    <h2>Try Advanced feature htmlFor 30 days</h2>
                    <p>Your 30 days trial for advance feature include:</p>
                    <div>
                        <ul>
                            <li><h5>Access to premium feature</h5>
                                <p>Live chat,template library,auto resend, propotion pop-ups,Al writing assistant and more</p></li>
                            <li><h5>Access to main feature</h5>
                                <p>Email automation , landing pages, website builder and more </p></li>
                            <li><h5>Up to 1,000 subscribers</h5></li>
                            <li><h5>Send up to 12,000 emails per month</h5></li>
                            <li><h5>24/7 live chat support</h5> </li>
                            <li><h5>Upgragde any time</h5></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </>);
}

export default SignUp;