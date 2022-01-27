import React, { useContext, useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import leilaoService from "../../service/leilao.service";
import FormAlteracaoLeilao from "../Formularios/FormAlteracaoLeilao";
import { LeilaoOperationContext } from "../LeilaoOperationsContext/_adm/LeilaoOperationsContext";

export default function ModalAlteraLeilao() {
  const { AlterarLeilaoShow, AlterarDataShow, handleAlterarLeilaoClose, setReloadComponentWhenUpdatedAuction } = useContext(LeilaoOperationContext);

  const [input, setInput] = useState({});
  //console.log(AlterarDataShow)
  useEffect(()=>(setInput(AlterarDataShow)), [AlterarDataShow])

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({ ...values, [name]: value }))
  }

  function submit() {
    leilaoService.updateLeilao(input);
    setReloadComponentWhenUpdatedAuction((reloadComponentWhenUpdatedAuction)=>  reloadComponentWhenUpdatedAuction + 1);
    handleAlterarLeilaoClose();
  }

  return (
    <Modal show={AlterarLeilaoShow} onHide={handleAlterarLeilaoClose}>
      <Modal.Header closeButton>
        <Modal.Title>Alteração</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormAlteracaoLeilao 
        input={input}
        setInput={setInput}
        handleChange={handleChange}
        />
      </Modal.Body>
      <Modal.Footer className="col-md">
        <Button variant="secondary" onClick={handleAlterarLeilaoClose}>Cancelar</Button>
        <Button variant="success" onClick={submit} type="submit" >Salvar</Button>
      </Modal.Footer>
    </Modal>
  );
}