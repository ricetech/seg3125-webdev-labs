import React from "react";

import "./_lab4-services-table.scss";
import { Table } from "react-bootstrap";

export const Lab4ServicesTable = () => {
  return (
    <>
      <h3>Services</h3>
      <Table hover>
        <thead>
          <tr>
            <th>Service</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Service 1</td>
            <td>$10.00</td>
          </tr>
          <tr>
            <td>Service 2</td>
            <td>$10.00</td>
          </tr>
          <tr>
            <td>Service 3</td>
            <td>$10.00</td>
          </tr>
          <tr>
            <td>Service 4</td>
            <td>$10.00</td>
          </tr>
          <tr>
            <td>Service 5</td>
            <td>$10.00</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
