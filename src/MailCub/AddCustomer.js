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
import axios from 'axios';

const AddCustomer = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        industryType: '',
        password: '',
        customerType: ''
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://api.example.com/add_customer', formData); // Replace URL with your API endpoint
            console.log('Customer added successfully:', response.data);
            // Reset form after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                industryType: '',
                password: '',
                customerType: ''
            });
        } catch (error) {
            console.error('Error adding customer:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <h1>Add Customer</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <TextField
                            fullWidth
                            className="first-name"
                            id="outlined-basic"
                            label="First Name"
                            type="text"
                            variant="outlined"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                        <TextField
                            fullWidth
                            className="email"
                            id="outlined-basic"
                            label="Email"
                            type="email"
                            variant="outlined"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <TextField
                            fullWidth
                            className="Industry-type"
                            id="outlined-basic"
                            label="Industry Type"
                            type="text"
                            variant="outlined"
                            name="industryType"
                            value={formData.industryType}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-lg-6">
                        <TextField
                            fullWidth
                            className="last-name"
                            id="outlined-basic"
                            label="Last Name"
                            type="text"
                            variant="outlined"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                        <FormControl
                            fullWidth
                            className="password"
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
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <TextField
                            fullWidth
                            className="coustmer-type"
                            id="outlined-basic"
                            label="Customer Type"
                            type="text"
                            variant="outlined"
                            name="customerType"
                            value={formData.customerType}
                            onChange={handleInputChange}
                        />
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                            <Button variant="outlined" style={{ marginRight: '1rem', color: "#00A95A", border: "1px #00A95A" }}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" style={{ backgroundColor: "#00A95A", }}>
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default AddCustomer;
