export const isAuthenticated = () => {
    const storedToken = localStorage.getItem("token");
    return !!storedToken; 
  };
  
  export const login = (token) => {
    localStorage.setItem("token", token);
  };
  
  export const logout = () => {
    localStorage.removeItem("token");
  };