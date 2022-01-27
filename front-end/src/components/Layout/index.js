import React from "react";
import Routes from "../../Routes";
import Header from "../Header/Header"
import { BrowserRouter } from "react-router-dom";
import { LoginRegisterProvider } from "../LoginRegisterContext/LoginRegisterContext";
import { LeilaoOperationProvider } from "../LeilaoOperationsContext/_adm/LeilaoOperationsContext";

function Layout() {
  return (

    <BrowserRouter>
      <LeilaoOperationProvider>
        <LoginRegisterProvider>
          <Header />
        </LoginRegisterProvider>
        <Routes />
      </LeilaoOperationProvider>
    </BrowserRouter >

  );
}

export default Layout;