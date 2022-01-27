import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import leilaoService from "../../service/leilao.service";

const style = {
  fontWeight: "normal",
  fontSize: "1rem"
}

export default function Cabecalho(props) {
  const [leilao, setLeilao] = useState(undefined);

  let params = useParams();
  useEffect(() => {
    leilaoService.getLeilaoById(params.leilaoId)
      .then(
        (response) => {
          setLeilao(response);
        },
        (error) =>{
          console.log(error.message)
        }
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "flex-end",
        background: "#E0E0E0",
        padding: "0.5rem",
        marginBottom: "0.5 rem"
      }}>
        <div>
          {
            <div>
              <h6>Lote: <span style={style}>{leilao !== undefined ? leilao.lote : " "}</span></h6>
              <h6>Lance inicial: <span style={style}>R$ {leilao !== undefined ? leilao.lanceMinimo : " "}</span></h6>
              <h6>Status: <span style={style}>{leilao !== undefined ? leilao.status : " "}</span></h6>
              <h6>Expira em: <span style={style}>{leilao !== undefined ? leilao.dataExpiracao : " "}</span></h6>
            </div>
          }
        </div>
        <Form  onSubmit={props.handleLance} >
          <Row style={{ marginBottom: "10px" }}>
            <Col style={{ display: "flex" }}>
              <Form.Control
                placeholder="Faça seu lance"
                name="valor"
                //type="number"
                value={props.input}
                onChange={props.handleChange}
                
                style={{ marginRight: "0.5rem" }}
              />
              <Button variant="primary" onClick={props.handleLance}>
                Enviar
              </Button>
            </Col>


          </Row>
        </Form>

      </div>
    </>
  )
}