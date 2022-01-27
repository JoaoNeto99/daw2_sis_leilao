import React from "react";
import {Card, Button} from 'react-bootstrap';

function Box() {
  return (
    <Card>
      <Card.Header>Teste</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Go somewhere</Button>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
}

export default Box;