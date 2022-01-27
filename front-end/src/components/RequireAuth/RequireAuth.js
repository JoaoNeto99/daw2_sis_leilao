import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
//import useAuth from "../../service/useAuth"

export default function RequireAuth({ children }) {
  /* const { authed } = useAuth(); */
  const { authenticated, loading } = useContext(AuthContext);
  //const user = JSON.parse(sessionStorage.getItem("user"))
  //console.log({authenticated, loading})
  if (loading) {
    return null;
  }

  if (!authenticated) {
   // console.log("foi aqui no require")
    return <Navigate to="/notAutorized" replace />
  }

  return children;
  /* return authenticated === true
    ? (console.log("OLA EU AQUI " + authenticated), children)
    : (console.log(authenticated), <Navigate to="/notAutorized" replace />); */
}
/* console.log(authed)
(console.log("sou eu do require deu certo"),
console.log("sou eu do require") */