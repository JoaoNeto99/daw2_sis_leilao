import React, { useEffect, useState } from 'react';
import ModalLance from "../Modais/ModalLance";
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import leilaoService from '../../service/leilao.service';

export default function TabelaLeilaoUser(props) {
  const [data, setData] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    leilaoService.getLeiloesAbertos().then(
      (response) => {
        console.log(response);
        setData(response);
      },
      (error) => {
        console.log(error.message)
      }
    )
  }, []);

  function handleLance(leilao1) {
    navigate(`/user/lance/${leilao1.id}`);
  }

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Lote</th>
          <th>Status</th>
          <th>Lance inicial</th>
          <th>Expiração</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          data !== undefined
            ?
            data.map((leilao) => (
              <tr key={leilao.id}>
                <th scope={"row"}><span>{leilao.id}</span></th>
                <th><span>{leilao.lote}</span></th>
                <td><span>{leilao.status}</span></td>
                <td><span>{leilao.lanceMinimo}</span></td>
                <td><span>{leilao.dataExpiracao}</span></td>
                <td><Button variant="outline-success" size="sm" onClick={() => handleLance(leilao)}>Fazer lance</Button></td>
              </tr>
            ))
            : null
        }
      </tbody>
      < ModalLance />
    </Table >





  );
}