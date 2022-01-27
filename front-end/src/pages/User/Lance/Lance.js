import React from "react";
import Container from "../../../components/Container/Container"
import TabelaLanceUser from "../../../components/TabelaLances/TabelaLanceUser";

export default function Lance() {

  return (
    <>
      <Container>
        {/* <LanceOperationProvider>
          <Cabecalho /> */}
          <TabelaLanceUser />
       {/*  </LanceOperationProvider> */}
      </Container>
    </>
  )
}