import { React, useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FormLogin from "../Formularios/FormLogin";
import { LoginRegisterContext } from "../LoginRegisterContext/LoginRegisterContext";
import { useNavigate } from "react-router-dom";
import AuthService from "../../service/auth.service";
import { AuthContext } from "../../Context/AuthContext";
//import useAuth from "../../service/useAuth";


export default function LoginModal() {
  const { LoginShow, handleLoginClose } = useContext(LoginRegisterContext);
  const navigate = useNavigate();
  const [data, setData] = useState({});
  //const { login } = useAuth();

  const { login } = useContext(AuthContext);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setData(values => ({ ...values, [name]: value }))
  }

  async function handleLogin(e) {
    e.preventDefault();
    /*     try {
          await AuthService.login(data.email, data.password).then(
            () => {
              const currentUser = AuthService.getCurrentUser();
              if (currentUser.role === "ADMIN") {
                handleLoginClose();
                navigate("/adm/leilao");
              } else {
                handleLoginClose();
                navigate("/user/leilao");
              }
              setData({});
            },
            (error) => {
              console.log(error);
            }
          );
        } catch (err) {
          console.log(err);
        } */

    login(data.email, data.password).then(
      (response) => {
        const currentUser = AuthService.getCurrentUser();
        console.log(currentUser);
        handleLoginClose();
        if (currentUser.role === "USER") {
          console.log("eu do login user")
          navigate("/user/leilao");
        } else if (currentUser.role === "ADMIN") {
          console.log("eu do login adm")
          navigate("/adm/leilao");
        } else {
          console.log("eu do login náo da")
          navigate("/notAutorized");
        }
      },
      (error) => {
        console.log(error.message)
      });

  };

  return (
    <Modal show={LoginShow} onHide={handleLoginClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sing-in</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormLogin
          handleLogin={handleLogin}
          handleChange={handleChange}
          input={data}
        />
      </Modal.Body>
      <Modal.Footer className="col-md">
        <Button variant="secondary" onClick={handleLoginClose}>Cancelar</Button>
        <Button variant="success" onClick={handleLogin} type="submit" >Entrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

