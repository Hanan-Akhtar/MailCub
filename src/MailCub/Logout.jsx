import axios from 'axios';

export const logout = async (navigate, ) => {
    try {
        const token=localStorage.getItem("token")
        const headers = {
            'x-sh-auth': token,
        };
        console.log(token,"token---")
        const response = await axios.get("http://146.190.164.174:4000/api/app_api/logout", { headers: headers });
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
