import { React } from "react";
import { Form, Row, Col } from 'react-bootstrap';

function FormRegister(props) {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Row style={{ marginBottom: "10px" }}>
        <Col>
          <Form.Control
            placeholder="Name"
            name="nome"
            type="text"
            onChange={props.handleChange}
            value={props.input.nome || ""}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col>
          <Form.Control
            placeholder="CPF"
            name="cpf"
            type="text"
            onChange={props.handleChange}
            value={props.input.cpf || ""}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col>
          <Form.Control
            placeholder="E-mail"
            name="email"
            type="e-mail"
            onChange={props.handleChange}
            value={props.input.email || ""}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control
            placeholder="Password"
            name="senha"
            type="password"
            onChange={props.handleChange}
            value={props.input.senha || ""}
          />
        </Col>
      </Row>
    </Form>
  );
}

export default FormRegister;