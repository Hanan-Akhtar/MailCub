import axios from 'axios';

export const logout = async () => {
    try {
        const response = await axios.get("http://146.190.164.174:4000/api/app_api/logout");
        if (response.status === 200) {
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            return true;
        }
        return false;
    } catch (error) {
        console.error('Logout error:', error.response);
        return false;
    }
};
