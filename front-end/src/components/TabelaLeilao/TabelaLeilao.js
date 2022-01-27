/*import React, { useEffect, useState } from "react";
 import { useLocation } from 'react-router-dom';
import authService from "../../service/auth.service";
import TabelaLeilaoAdm from "./TabelaLeilaoAdm";
import TabelaLeilaoUser from "./TabelaLeilaoUser"; */

/* const data = [
  { id: "1", item: "item1", status: "INATIVO", valorLanceMinimo: "00", dataExpiracao: "10/10/12" },
  { id: "2", item: "item2", status: "ABERTO", valorLanceMinimo: "00", dataExpiracao: "10/10/12" },
  { id: "3", item: "item3", status: "EXPIRADO", valorLanceMinimo: "00", dataExpiracao: "10/10/12" },
  { id: "4", item: "item4", status: "FINALIZADO", valorLanceMinimo: "00", dataExpiracao: "10/10/12" },
  { id: "5", item: "item5", status: "FINALIZADO", valorLanceMinimo: "00", dataExpiracao: "10/10/12" },
]; */

export default function TabelaLeilao({ children }) {
  /*   const [currentUser, setCurrentUser] = useState(undefined);
    const [pathname, setPathname] = useState(undefined);
    let location = useLocation();
  
    useEffect(() => {
      setPathname(location.pathname)
      let user = authService.getCurrentUser();
      console.log(user)
      if (user) {
        setCurrentUser(user);
        console.log(currentUser)
      }
    }, [location]); */

  return (
    children
    /*     currentUser && currentUser.role === "USER" && pathname.startsWith("/user") ?
          (
            <TabelaLeilaoUser
              data={data}
            />
          )
          : currentUser && currentUser.role === "ADMIN" && pathname.startsWith("/adm") ?
            (
              <TabelaLeilaoAdm
                data={data}
              />
            )
            : (<h1>Sem autorizacao parca</h1>)
       */
  );
}