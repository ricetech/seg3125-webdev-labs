import React, { useState } from 'react';
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Restrictions } from "../../enums/restrictions";
import { Product } from "../../interfaces/product";

import './_lab2-products.scss';
import { products } from "../../data/products";

interface Lab2ProductsPageProps {
  preferences: Restrictions[];
  setPreferences: React.Dispatch<React.SetStateAction<Restrictions[]>>;
  cart: Set<number>;
  setCart: React.Dispatch<React.SetStateAction<Set<number>>>;
}

export const Lab2ProductsPage = (props: Lab2ProductsPageProps) => {
  return (
    <>
      <Row>
        <Col>
          <h2>Products</h2>
          <p>
            Based on your <Link to='/lab2/preferences'>preferences</Link>, we have curated the following
            products for you.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table hover>
            <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th />
            </tr>
            </thead>
            <tbody>
            {products.map((product) => (
              <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price.toFixed(2)}</td>
                <td><Button size='sm'>Add to Cart</Button></td>
              </tr>
            ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}
