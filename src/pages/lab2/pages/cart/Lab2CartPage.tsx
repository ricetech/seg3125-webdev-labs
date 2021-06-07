import React from 'react';
import { Col, Row, Table } from "react-bootstrap";

import { priceComparator } from "../../interfaces/product";

import './_lab2-cart.scss';
import { products } from "../../data/products";

interface Lab2CartPageProps {
  cart: Set<number>;
  setCart: React.Dispatch<React.SetStateAction<Set<number>>>;
}

export const Lab2CartPage = (props: Lab2CartPageProps) => {
  const inCart = (itemId: number) => props.cart.has(itemId);

  const sortedFilteredProducts = products.sort(priceComparator).filter((product) => (inCart(product.id)));

  const cartTotal = (): string => {
    let total = 0;
    sortedFilteredProducts.forEach((product) => {
      total += product.price;
    })
    return total.toFixed(2);
  }

  return (
    <>
      {
        props.cart.size !== 0 ? (
          <>
            <Row>
            <Col>
              <h2>Cart</h2>
            </Col>
          </Row>
            <Row>
              <Col>
                <Table hover>
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                  </thead>
                  <tbody>
                  {sortedFilteredProducts.map((product) => (
                    <tr>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>${product.price.toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td />
                    <td><b>Total</b></td>
                    <td>{`$${cartTotal()}`}</td>
                  </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )
      }
    </>
  );
}
