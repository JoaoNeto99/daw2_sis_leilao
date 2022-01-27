import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import leilaoService from "../../service/leilao.service";
import FormAlteracaoLeilao from "../Formularios/FormAlteracaoLeilao";
import { LeilaoOperationContext } from "../LeilaoOperationsContext/_adm/LeilaoOperationsContext";

export default function ModalSalvaLeilao() {
  const { SalvaLeilaoShow, setReloadComponentWhenUpdatedAuction, reloadComponentWhenUpdatedAuction, handleSalvaLeilaoClose } = useContext(LeilaoOperationContext);
  const [input, setInput] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({ ...values, [name]: value }))
  }

  function submit() {
    leilaoService.saveLeilao(input);
    setReloadComponentWhenUpdatedAuction((reloadComponentWhenUpdatedAuction)=> reloadComponentWhenUpdatedAuction + 1);
    handleSalvaLeilaoClose();
    setInput({});
  }

  return (
    <Modal show={SalvaLeilaoShow} onHide={handleSalvaLeilaoClose}>
      <Modal.Header closeButton>
        <Modal.Title>Novo Leilao</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormAlteracaoLeilao 
        input={input}
        handleChange={handleChange}
        submit={submit}
        />
      </Modal.Body>
      <Modal.Footer className="col-md">
        <Button variant="secondary" onClick={handleSalvaLeilaoClose}>Cancelar</Button>
        <Button variant="success" onClick={submit} type="submit" >Salvar</Button>
      </Modal.Footer>
    </Modal>
  );
}