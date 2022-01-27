import { React, useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import userService from "../../service/user.service";
import FormRegister from "../Formularios/FormRegister";
import { LoginRegisterContext } from "../LoginRegisterContext/LoginRegisterContext";

export default function RegisterModal() {
  const { RegisterShow, handleRegisterClose } = useContext(LoginRegisterContext);

  const [input, setInput] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({ ...values, [name]: value }))
  }

  function submit() {
    userService.save(input);
    handleRegisterClose();
    setInput({});
  }


  return (
    <Modal show={RegisterShow} onHide={handleRegisterClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cadastre-se</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormRegister
        handleSubmit={submit}
        handleChange={handleChange}
        input={input}
         />
      </Modal.Body>
      <Modal.Footer className="col-md">
        <Button variant="secondary" onClick={handleRegisterClose}>Cancelar</Button>
        <Button variant="success" onClick={submit} type="submit" >Salvar</Button>
      </Modal.Footer>
    </Modal>
  );
}

