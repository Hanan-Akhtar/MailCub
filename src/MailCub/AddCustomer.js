import * as React from 'react';
import "../App.css";
import { TextField, } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { useState } from 'react';

const AddCustomer = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (<>
        <div className="container">   
                <h1>Add Customer</h1>
                <div className="row">
                    <div className="col-lg-6"><TextField fullWidth className="first-name" sx={{
                        '& label.Mui-focused': {
                            color: '#00A95A',
                        },
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: '#00A95A',
                            },
                        },
                    }} id="outlined-basic" label="First Name" type="text" variant="outlined" required />
                        <TextField fullWidth className="email" sx={{
                            '& label.Mui-focused': {
                                color: '#00A95A',
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00A95A',
                                },
                            },
                        }} id="outlined-basic" label="Email" type="email" variant="outlined" required />

                        <TextField fullWidth className="Industry-type" sx={{
                            '& label.Mui-focused': {
                                color: '#00A95A',
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00A95A',
                                },
                            },
                        }} id="outlined-basic" label="Industry Type" type="text" variant="outlined" />
                    </div>
                    <div className="col-lg-6">
                        <TextField fullWidth className="last-name" sx={{
                            '& label.Mui-focused': {
                                color: '#00A95A',
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00A95A',
                                },
                            },
                        }} id="outlined-basic" label="Last Name" type="text" variant="outlined" required />
                        <FormControl
                            fullWidth className="password"
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

                            />
                        </FormControl>
                        <TextField fullWidth className="coustmer-type" sx={{
                            '& label.Mui-focused': {
                                color: '#00A95A',
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00A95A',
                                },
                            },
                        }} id="outlined-basic" label="Customer Type" type="text" variant="outlined" />
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                            <Button variant="outlined"  style={{ marginRight: '1rem',color:"#00A95A",border:"1px #00A95A" }}>
                                Cancel
                            </Button>
                            <Button variant="contained" style={{backgroundColor:"#00A95A",}} >
                                Save
                            </Button>
                        </div>
                        </div>
                </div>
            </div>
    </>);
}

export default AddCustomer;