import React, { useState, useEffect } from "react";
import { Table, Form } from 'react-bootstrap';
import TableRow from "./TableRow";
import leilaoService from "../../service/leilao.service";
import lanceService from "../../service/lance.service";

export default function TabelaLance() {

  const [input, setInput] = useState(undefined);
  const [lances, setLances] = useState(undefined);
  const [leiloes, setLeiloes] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setInput(value)
  }

  useEffect(() => {
    leilaoService.getAllLeiloes().then(
      (response) => {
        setLeiloes(response);
      },
      (error) => {console.log(error.message);}
    );

    if (leiloes.length > 0) {
       findLancesByLeilao(input);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, leiloes.length])

  function findLancesByLeilao(leilaoId = leiloes[0].id) {
    lanceService.getAllLances(leilaoId).then(
      (response) => {
        setLances(response);
        
      },
      (error) => { console.log(error) }
    );
  }

  return (
        <>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Lista de Lances</h2>
            <Form.Select style={{ width: "30%" }} onChange={handleChange}>
              {
                leiloes.length > 0 ?
                  (
                    leiloes.map(
                      leilao => (<option key={leilao.id} value={leilao.id}>{leilao.lote}</option>)
                    ))
                  : null
              }
            </Form.Select>
          </ div>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Lance</th>
                <th>Participante</th>
              </tr>
            </thead>
            <tbody>
              {
                lances !== undefined
                  ? lances.map((lance) => (
                    <TableRow
                      key={lance.lance_id}
                      lance={lance}
                    />
                  ))
                  : null
              }
            </tbody>
          </Table >
        </>
  );
}

