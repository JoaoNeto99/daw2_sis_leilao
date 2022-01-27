import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import LoginModal from '../Modais/LoginModal';
import RegisterModal from '../Modais/RegisterModal';
import ModalSalvaLeilao from '../Modais/ModalSalvaleilao';
import AuthService from '../../service/auth.service';
import { LoginRegisterContext } from '../LoginRegisterContext/LoginRegisterContext';
import { useLocation } from 'react-router-dom';
import { LeilaoOperationContext } from '../LeilaoOperationsContext/_adm/LeilaoOperationsContext';
import { AuthContext } from '../../Context/AuthContext';
/* import { useAuth } from '../../service/useAuth'; */

function Header() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [pathname, setPathname] = useState(undefined);
  const { handleLoginShow, handleRegisterShow } = useContext(LoginRegisterContext);
  const { handleSalvaLeilaoShow } = useContext(LeilaoOperationContext);

  /* const { logout } = useAuth(); */
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  let location = useLocation();

  const logOut = () => {
    logout();
   // window.location.reload();
    navigate("/");
    setCurrentUser(undefined);
  };


  useEffect(() => {
    setPathname(location.pathname);
    let user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
       /* console.log({currentUser}) */
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container >
          <Navbar.Brand as={Link} to="/">Sis.Leiloes</Navbar.Brand>
          {currentUser && currentUser.role === "USER"/*  && pathname.startsWith("/user") */
            ?
            (
              < Nav style={{ width: "100%" }}>
                <Nav.Link as={Link} to="/user/leilao">Leilões</Nav.Link>
                {/*<Button onClick={logOut}>Logout</Button>*/}
              </Nav >
            )
            :
            currentUser && currentUser.role === "ADMIN"/*  && pathname.startsWith("/adm") */
              ?
              (
                <Nav style={{ width: "100%", justifyContent: "space-between" }}>
                  <div style={{ width: "80%", display: "flex" }}>
                    <Nav.Link as={Link} to="/adm/leilao">Leilões</Nav.Link>
                    <Nav.Link as={Link} to="/adm/lance">Lances</Nav.Link>
                  </div>
                  {
                     pathname.startsWith("/adm/leilao")
                      ? <Button onClick={handleSalvaLeilaoShow} variant="success">Novo Leilao</Button>
                      : null
                  }
                  {/*<Nav.Link as={Link} to="/adm/participante">Participantes</Nav.Link>
                  <Button onClick={logOut}>Logout</Button>*/}
                </Nav>
              )
              :
              (
                <Nav className="justify-content-end">
                  <Button variant="link"
                    onClick={handleLoginShow}
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }} >Login</Button>
                  <Button variant="link"
                    onClick={handleRegisterShow}
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }} >Register</Button>
                </Nav>
              )

          }
        </Container>
        {
          currentUser && currentUser.role === "USER" && pathname.startsWith("/user") ?
            (<Button style={{ marginRight: "0.5rem" }} onClick={logOut}>Logout</Button>)
            : currentUser && currentUser.role === "ADMIN" && pathname.startsWith("/adm") ?
              (<Button style={{ marginRight: "0.5rem" }} onClick={logOut}>Logout</Button>)
              : ("")
        }
      </Navbar>
      <LoginModal />
      <ModalSalvaLeilao />
      <RegisterModal />
    </>
  );
}
// rota home, publica, tenho que verificar se a rota é /
// rota adm, privada, tenho que verificar se há um usuario e se ele é adm
// rota user, privada, tenho que verificar se há um usuario e se ele é user
export default Header;
