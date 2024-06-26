import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const SearchBar = ({ fetchData }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const apiUrl = process.env.REACT_APP_API_URL;

    const handleSearch = async () => {
        try {
            const token = localStorage.getItem("token");
            const headers = {
                'x-sh-auth': token,
            };
            const response = await axios.get(`${apiUrl}api/customer/search_customer`, { headers: headers });
            console.log('Search Response:', response.data);
            fetchData(response.data);
        } catch (error) {
            console.error('Error searching:', error.response);
        }
    };

    const handleInputChange = event => {
        setSearchQuery(event.target.value);
    }

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
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                InputLabelProps={{
                    style: {
                        color: '#00A95A'
                    }
                }}
                InputProps={{
                    style: {
                        color: '#00A95A',
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#00A95A'
                        }
                    }
                }}
            />
        </div>
    );
};

export default SearchBar;
