import React from "react";

import "./_lab5-services-table.scss";
import { Table } from "react-bootstrap";
import { Service } from "../../interfaces/service";
import { BsLifePreserver } from "react-icons/bs";

interface Lab4ServicesTableProps {
  services: Service[];
}

export const Lab5ServicesTable = (props: Lab4ServicesTableProps) => {
  return (
    <>
      <h3>
        <BsLifePreserver /> Services
      </h3>
      <Table hover>
        <thead>
          <tr>
            <th>Service</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.services.map((service) => (
            <tr key={service.id}>
              <td>{service.name}</td>
              <td>${service.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
