// utils/auth.js
import Cookies from 'js-cookie';

export const logout = () => {
  // Clear the authentication token
  Cookies.remove('access_token');

  
};