import React, { useState, createContext } from "react";

export const LoginRegisterContext = createContext('ok');

export function LoginRegisterProvider(props) {
  const [LoginShow, setLoginShow] = useState(false);
  const handleLoginShow = () => setLoginShow(true);
  const handleLoginClose = () => setLoginShow(false);

  const [RegisterShow, setRegisterShow] = useState(false);
  const handleRegisterShow = () => setRegisterShow(true);
  const handleRegisterClose = () => setRegisterShow(false);

  return (
    <LoginRegisterContext.Provider
     value={{
       LoginShow,
       RegisterShow,
       handleLoginShow,
       handleLoginClose,
       handleRegisterShow,
       handleRegisterClose
     }}
    >
      {props.children}
      </ LoginRegisterContext.Provider>
      );
}

