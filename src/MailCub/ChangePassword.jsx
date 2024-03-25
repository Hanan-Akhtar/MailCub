
import axios from 'axios';

export const changePassword = async (newPassword) => {
  try {
    const response = await axios.post('http://146.190.164.174:4000/api/app_api/change_password', { newPassword });
    return response.data.success; 
  } catch (error) {
    console.error('Error changing password:', error.response);
    return false;
  }
};
