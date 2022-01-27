import React from "react";
import Layout from "./components/Layout";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Layout />
      </AuthProvider>
  );
}

export default App;
