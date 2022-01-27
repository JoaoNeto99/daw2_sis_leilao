import React, { useState, createContext } from "react";

export const LeilaoOperationContext = createContext('ok');

//contextParaAbrirModal
export function LeilaoOperationProvider(props) {
  const [AlterarLeilaoShow, setAlterarLeilao] = useState(false);
  const [AlterarDataShow, setAlterarData] = useState({});
  const [reloadComponentWhenUpdatedAuction, setReloadComponentWhenUpdatedAuction] = useState(0);
  const handleAlterarLeilaoShow = (leilao) => { setAlterarLeilao(true); setAlterarData(leilao); };
  const handleAlterarLeilaoClose = () => setAlterarLeilao(false);

  const [SalvaLeilaoShow, setSalvaLeilao] = useState(false);
  const handleSalvaLeilaoShow = () => setSalvaLeilao(true);
  const handleSalvaLeilaoClose = () => setSalvaLeilao(false);
  console.log(reloadComponentWhenUpdatedAuction)

  return (
    <LeilaoOperationContext.Provider
      value={{
        AlterarLeilaoShow,
        handleAlterarLeilaoShow,
        handleAlterarLeilaoClose,
        SalvaLeilaoShow,
        handleSalvaLeilaoShow,
        handleSalvaLeilaoClose,
        AlterarDataShow,
        setReloadComponentWhenUpdatedAuction,
        reloadComponentWhenUpdatedAuction
      }}
    >
      {props.children}
    </LeilaoOperationContext.Provider>
  );
}
