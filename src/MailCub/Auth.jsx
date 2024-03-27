export const isAuthenticated = () => {
    const storedToken = localStorage.getItem("token");
    return !!storedToken; 
  };
 