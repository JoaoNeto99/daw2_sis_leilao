import { React } from "react";
import { Form, Row, Col } from 'react-bootstrap';

export default function FormAlteracaoLeilao(props) {
  return (
    <Form  onSubmit={props.submit} >
      <Row style={{ marginBottom: "2rem" }}>
        <Col>
          <Form.Control
            placeholder="Item"
            name="lote"
            onChange={props.handleChange}
            value={props.input.lote || ""}
          />
        </Col>

      </Row>
      <Row>
        <Col>
          <Form.Control
            placeholder="Lance Minimo"
            name="lanceMinimo"
            type="number"
            onChange={props.handleChange}
            value={props.input.lanceMinimo || ""}
          />
        </Col>
        <Col>
          <Form.Control
            type="date"
            placeholder="Data de Expiração"
            name="dataExpiracao"
            onChange={props.handleChange}
            value={props.input.dataExpiracao || ""}
          />
        </Col>
        <p style={{ color: "#808080" }}><small> Todos os campos são obrigatórios</small></p>
      </Row>
    </Form>
  );
}