import React from "react";
import { Navigate } from "react-router-dom";
import Container from "../../../components/Container/Container"
import TabelaLance from "../../../components/TabelaLances/TabelaLances";
import authService from "../../../service/auth.service";

export default function LanceAdm() {
  const user = authService.getCurrentUser();

  return (
    <>
      <Container>
        {user && user.role === "ADMIN"/*  && pathname.startsWith("/adm")  */
          ? <TabelaLance />
          : <Navigate to="/notAutorized" replace />
        }
      </Container>
    </>
  );
}