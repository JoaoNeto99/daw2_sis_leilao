import React from "react";
import TabelaLeilao from "../../../components/TabelaLeilao/TabelaLeilao";
import Container from "../../../components/Container/Container"
import { LeilaoOperationProvider } from "../../../components/LeilaoOperationsContext/_adm/LeilaoOperationsContext";
import { Navigate } from "react-router-dom";
import TabelaLeilaoAdm from "../../../components/TabelaLeilao/TabelaLeilaoAdm";
import authService from "../../../service/auth.service";

const data = [
  { id: "1", item: "item1", status: "INATIVO", valorLanceMinimo: "00", dataExpiracao: "10/10/12" },
  { id: "2", item: "item2", status: "ABERTO", valorLanceMinimo: "00", dataExpiracao: "10/10/12" },
  { id: "3", item: "item3", status: "EXPIRADO", valorLanceMinimo: "00", dataExpiracao: "10/10/12" },
  { id: "4", item: "item4", status: "FINALIZADO", valorLanceMinimo: "00", dataExpiracao: "10/10/12" },
  { id: "5", item: "item5", status: "FINALIZADO", valorLanceMinimo: "00", dataExpiracao: "10/10/12" },
];

export default function LeilaoAdm() {
  const user = authService.getCurrentUser();
  return (
    <>
      <Container>
        {user && user.role === "ADMIN"/*  && pathname.startsWith("/user") */
          ?
          (
            <>
              <TabelaLeilao>
                <TabelaLeilaoAdm
                  data={data}
                />
              </TabelaLeilao>
            </>)
          :
          <Navigate to="/notAutorized" replace />
        }
      </Container>
    </>
  );
}