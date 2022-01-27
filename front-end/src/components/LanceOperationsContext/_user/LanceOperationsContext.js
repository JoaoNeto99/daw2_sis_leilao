import React, { useState, createContext } from "react";

export const LanceOperationContext = createContext('ok');


export function LanceOperationProvider(props) {
  const [lance, setLance] = useState(undefined);
  // const handleSetLeilao = (leilao1) => setLeilao(leilao1);
 /* const handlefazLanceClose = () => setFazLance(false); */
  return (
    <LanceOperationContext.Provider
    value={{
      lance, setLance
    }}
    >
      {props.children}
      </LanceOperationContext.Provider>
  );
}