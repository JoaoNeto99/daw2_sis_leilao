import React from "react";
import { Form, Row, Col } from 'react-bootstrap';

export default function FormLogin(props) {
  return (
    <Form onSubmit={props.handleLogin}>
      <Row style={{ marginBottom: "10px" }}>
        <Col>
          <Form.Control
            placeholder="E-mail"
            name="email"
            onChange={props.handleChange}
            value={props.input.email || ""}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control
            placeholder="Password"
            name="password"
            type="password"
            onChange={props.handleChange}
            value={props.input.password || ""}
          />
        </Col>
      </Row>
    </Form>
  );
}