import axios from 'axios';

export const logout = async (navigate, ) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
        const token=localStorage.getItem("token")
        const headers = {
            'x-sh-auth': token,
        };
        console.log(token,"token---")
        const response = await axios.get(`${apiUrl}api/app_api/logout`, { headers: headers });
        if (response.status === 200) {
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            navigate('/signIn');
            return true;
        }
        return false;
    } catch (error) {
        console.error('Logout error:', error.response);
        return false;
    }
};
