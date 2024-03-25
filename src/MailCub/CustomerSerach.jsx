import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const SearchBar = ({ fetchData }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://146.190.164.174:4000/api/customer/search_customer`);
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
                label="Search customer....."
                variant="outlined"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                style={{
                    '& label.Mui-focused': {
                        color: '#00A95A',
                    },
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: '#00A95A',
                        },
                    },
                }}
            />

        </div>
    );
};

export default SearchBar;
