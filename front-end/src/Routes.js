import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import Home from "./pages/Home";
import Leilao from "./pages/User/Leilao/Leilao";
import LeilaoAdm from "./pages/Adm/Leilao/Leilao";
import Lance from "./pages/User/Lance/Lance";
import LanceAdm from "./pages/Adm/Lance/Lance";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import SemPermissao from "./components/SemPermissao/SemPermissao";


function Routes() {

  return (
    <Router>
      <Route exact path="/" element={<Home />} />

      <Route
        exact path="/user/leilao"
        element={
          <RequireAuth>
            <Leilao />
          </RequireAuth>
        } />
      <Route
        exact path="/user/lance/:leilaoId"
        element={
          <RequireAuth>
            <Lance />
          </RequireAuth>
        } />

      <Route
        exact path="/adm/leilao"
        element={
          <RequireAuth>
            <LeilaoAdm />
          </RequireAuth>
        } />

      <Route
        exact path="/adm/lance"
        element={
          <RequireAuth>
            <LanceAdm />
          </RequireAuth>
        } />

      <Route exact path="/notAutorized" element={<SemPermissao />} />
    </Router>
  );
}

export default Routes;