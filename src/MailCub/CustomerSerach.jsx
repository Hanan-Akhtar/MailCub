import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const SearchBar = ({ fetchData }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = async () => {
        try {
            const token = localStorage.getItem("token")
            const headers = {
                'x-sh-auth': token,
            };
            const response = await axios.get(`http://146.190.164.174:4000/api/customer/search_customer`, { headers: headers });
            fetchData(response.data);
        } catch (error) {
            console.error('Error searching:', error.response);
        }
    };

    const handleInputChange = event => {
        setSearchQuery(event.target.value);
    };

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
            <TextField
                fullWidth
                label="Search customer....."
                type="text"
                value={searchQuery}
                onKeyDown={handleKeyPress}
                sx={{
                    maxWidth: '100%',
                    '& label.Mui-focused': {
                        color: '#00A95A !important', 
                    },
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: '#00A95A !important',
                        },
                    },
                }}
            />

        </div>
    );
};

export default SearchBar;
