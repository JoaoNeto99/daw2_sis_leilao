import { useState, useEffect } from 'react';
import authService from "./auth.service";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  /* const [loading, setLoading] = useState(true); */
  // console.log({ loading })
  useEffect(() => {
      const user = sessionStorage.getItem("user");
      
      if (user) {
        setAuthenticated(true);
      }
      setLoading(false);
  }, []);

  function login(email, password) {
    return authService.login(email, password)
      .then(
        (response) => {
          if (response.token) {
            setAuthenticated(true);
            sessionStorage.setItem("user", JSON.stringify(response));
            /* return response; */
          }
        });/* ,
        (error) => {
          return error;
        }); */
  }

  function logout() {
    setAuthenticated(false);
    return authService.logout();
  }

  return { authenticated, loading, login, logout };
}



