import React, { createContext } from 'react';

import useAuth from '../service/useAuth';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const {
    authenticated, login, logout, loading
  } = useAuth();

  return (
    <AuthContext.Provider value={{ authenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
