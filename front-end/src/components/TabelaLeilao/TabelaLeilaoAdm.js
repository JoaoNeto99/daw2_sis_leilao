import React, { useContext, useEffect, useState } from 'react';
import { Form, Table, } from 'react-bootstrap';
import leilaoService from '../../service/leilao.service';
import { LeilaoOperationContext } from '../LeilaoOperationsContext/_adm/LeilaoOperationsContext';
import ModalAlteraLeilao from '../Modais/ModalAlteraLeilao';
import TabelaLeilaoLinhasAdm from './TabelaLeilaoLinhasAdm';

export default function TabelaLeilaoAdm(props) {
  const { reloadComponentWhenUpdatedAuction } = useContext(LeilaoOperationContext);
  const [input, setInput] = useState("todos");
  const [data, setData] = useState(undefined);
  const [acao, setAcao] = useState();

  function handleChange(event) {
    const value = event.target.value;
    setInput(value)
  }

  useEffect(() => {
    leilaoService.getAllLeiloes().then(
      (response) => {
        //console.log(response);
        setData(response);
      },
      (error) => {
        console.log(error.message)
      }
    )
  }, [reloadComponentWhenUpdatedAuction, acao]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Lista de Leilões</h2>
        <Form.Select style={{ width: "20%" }} aria-label="Todos" onChange={handleChange}>
          <option value="todos">Todos</option>
          <option value="inativo">Inativo</option>
          <option value="aberto">Aberto</option>
          <option value="finalizado">Finalizado</option>
          <option value="expirado">Expirado</option>
        </Form.Select>
      </ div>

      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Lote</th>
            <th>Status</th>
            <th>Lance inicial</th>
            <th>Expiração</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            data !== undefined ?
              input === "todos"
                ?
                data.map((leilao) => (
                  <TabelaLeilaoLinhasAdm
                    key={leilao.id}
                    leilao={leilao}
                    setAcao={setAcao}
                  />
                ))
                : input === "inativo" ?
                  data.filter((item) => item.status.toLowerCase() === "inativo").map(leilao => (
                    <TabelaLeilaoLinhasAdm
                      key={leilao.id}
                      leilao={leilao}
                      setAcao={setAcao}
                    />
                  ))
                  : input === "aberto" ?
                    data.filter((item) => item.status.toLowerCase() === "aberto").map(leilao => (
                      <TabelaLeilaoLinhasAdm
                        key={leilao.id}
                        leilao={leilao}
                        setAcao={setAcao}
                      />
                    ))
                    : input === "finalizado" ?
                      data.filter((item) => item.status.toLowerCase() === "finalizado").map(leilao => (
                        <TabelaLeilaoLinhasAdm
                          key={leilao.id}
                          leilao={leilao}
                          setAcao={setAcao}
                        />
                      ))
                      : data.filter((item) => item.status.toLowerCase() === "expirado").map(leilao => (
                        <TabelaLeilaoLinhasAdm
                          key={leilao.id}
                          leilao={leilao}
                          setAcao={setAcao}
                        />
                      ))
              : null
          }
        </tbody>
      </Table >
      <ModalAlteraLeilao />
    </>
  );
}