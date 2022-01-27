import { React, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { LanceOperationContext } from "../LanceOperationsContext/_user/LanceOperationsContext";

export default function ModalLance() {
  const { fazLanceShow, handlefazLanceShow, handlefazLanceClose } = useContext(LanceOperationContext);

  return (
    <Modal show={fazLanceShow} onHide={handlefazLanceClose}>
      <Modal.Header closeButton>
        <Modal.Title>Faça seu lance</Modal.Title>
      </Modal.Header>
      <Modal.Body>

      </Modal.Body>
      <Modal.Footer className="col-md">
        <Button variant="secondary" onClick={handlefazLanceClose}>Cancelar</Button>
        <Button variant="success" onClick={handlefazLanceShow} type="submit" >Salvar</Button>
      </Modal.Footer>
    </Modal>
  );
}