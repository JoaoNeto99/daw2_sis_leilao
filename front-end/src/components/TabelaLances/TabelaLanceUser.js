import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import lanceService from "../../service/lance.service";
import Cabecalho from "../CabecalhoLeilao/CabecalhoLeilao";
import TableRow from "./TableRow";
import authService from "../../service/auth.service";

export default function TabelaLanceUser() {
  const [lance, setLance] = useState(0);
  const [input, setInput] = useState(" ");
  const [data, setData] = useState(undefined);
  let params = useParams();
  const token = authService.getCurrentUser().token

  function handleLance() {
    setLance(input)
    console.log(lance)
    lanceService.fazLance({
      token: token,
      leilao_id: params.leilaoId, 
      valor: input
       }).then(
        (response) => {
          setLance((lance) => lance + 1);
          setInput(() => " ");
        },
        (error) => {
          console.log(error.message)
        }
      )

  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  useEffect(() => {
    lanceService.getAllLances(params.leilaoId)
      .then(
        (response) => {
          setData(response);
        },
        (error) => {
          console.log(error)
        }
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lance, setData, params.leilaoId]);

  return (
    <>
      <Cabecalho
        handleLance={handleLance}
        setInput={setInput}
        input={input}
        handleChange={handleChange}
      />
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
            data !== undefined
              ? data.map((item) => (
                <TableRow
                  key={item.lance_id}
                  lance={item}
                />
              ))
              : null
          }
        </tbody>
      </Table >
    </>

  );
}
