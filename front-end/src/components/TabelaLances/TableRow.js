import React from 'react';

export default function TableRow(props) {
  return (
    <tr>
      <th scope={"row"}><span>{props.lance.lance_id}</span></th>
     {/*  <th><span>{props.lance.item}</span></th> */}
      <td><span>{props.lance.valor}</span></td>
      <td><span>{props.lance.proponente}</span></td>
    </tr>
  );
}