import styled from "styled-components";
import { Table } from "react-bootstrap";
import { IResultados } from "../data/dataFormatCampeonatos";
import React from "react";

const TableResults = styled(Table)`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  text-align: center;
`;

const TablesIMG = styled.img`
  width: 20px;
  height: 20px;
`

export interface ITableResultadosProps {
  dados_campeonato?: IResultados[];
}

export const TableResultados = React.memo(function (props: ITableResultadosProps) {
  return (
    <TableResults>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>P</th>
          <th>V</th>
          <th>E</th>
          <th>D</th>
          <th>GP</th>
          <th>GC</th>
          <th>S</th>
        </tr>
      </thead>
      <tbody>
        {props.dados_campeonato?.map((dados, index: number) => {
          return <tr key={dados.time}>
            <td>{(index + 1).toString().padStart(2, '0')}</td>
            <td><TablesIMG src={dados.url_img}/></td>
            <td>{dados.time}</td>
            <td>{dados.pontos}</td>
            <td>{dados.vitorias}</td>
            <td>{dados.empates}</td>
            <td>{dados.derrotas}</td>
            <td>{dados.gols_pro}</td>
            <td>{dados.gols_contra}</td>
            <td>{dados.saldo_gols}</td>
          </tr>;
        })}
      </tbody>
    </TableResults>
  );
})
