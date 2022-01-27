import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { LeilaoOperationContext } from "../LeilaoOperationsContext/_adm/LeilaoOperationsContext";
import leilaoService from "../../service/leilao.service";

export default function TabelaLeilaoLinhasAdm(props) {
  const { handleAlterarLeilaoShow, setReloadComponentWhenUpdatedAuction, reloadComponentWhenUpdatedAuction } = useContext(LeilaoOperationContext);

  function AbrirLeilao(leilao) {
    leilaoService.openLeilao(leilao);
    props.setAcao(leilao);
    setReloadComponentWhenUpdatedAuction((reloadComponentWhenUpdatedAuction)=>  reloadComponentWhenUpdatedAuction + 1);
  }

  function FinalizaLeilao(leilao) {
    leilaoService.closeLeilao(leilao);
    props.setAcao(leilao);
    setReloadComponentWhenUpdatedAuction((reloadComponentWhenUpdatedAuction)=> reloadComponentWhenUpdatedAuction + 1);
  }

  function AlteraLeilao(leilao) {
   handleAlterarLeilaoShow(leilao);
   props.setAcao(leilao)
   setReloadComponentWhenUpdatedAuction((reloadComponentWhenUpdatedAuction)=> reloadComponentWhenUpdatedAuction + 1);
  }

  function ExcluirLeilao(leilao) {
    leilaoService.deleteLeilao(leilao.id);
    props.setAcao(leilao);
    setReloadComponentWhenUpdatedAuction((reloadComponentWhenUpdatedAuction)=> reloadComponentWhenUpdatedAuction + 1);
  }

  return (
    <tr>
      <th scope={"row"}><span>{props.leilao.id}</span></th>
      <th><span>{props.leilao.lote}</span></th>
      <td><span>{props.leilao.status}</span></td>
      <td><span>{props.leilao.lanceMinimo}</span></td>
      <td><span>{props.leilao.dataExpiracao}</span></td>
      <td><Button variant="outline-success" size="sm" onClick={() => AbrirLeilao(props.leilao)}>Abrir</Button></td>
      <td><Button variant="outline-secondary" size="sm" onClick={() => FinalizaLeilao(props.leilao)}>Finalizar</Button></td>
      <td><Button variant="outline-primary" size="sm" onClick={() => AlteraLeilao(props.leilao)}>Alterar</Button></td>
      <td><Button variant="outline-danger" size="sm" onClick={() => ExcluirLeilao(props.leilao)}>Excluir</Button></td>
    </tr>
  );
}