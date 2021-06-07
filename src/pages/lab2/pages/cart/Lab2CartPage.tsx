import React from 'react';
import { Button, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { priceComparator } from "../../interfaces/product";
import { products } from "../../data/products";

import './_lab2-cart.scss';

interface Lab2CartPageProps {
  cart: Set<number>;
  setCart: React.Dispatch<React.SetStateAction<Set<number>>>;
}

export const Lab2CartPage = (props: Lab2CartPageProps) => {
  const emptyCart = () => props.setCart(new Set<number>());

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
                    <tr key={`lab2-cart-${product.id}`}>
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
      <Row>
        <Col>
          <Button as={Link} to='/lab2/products'>Continue Shopping</Button>{' '}
          {
            props.cart.size !== 0 ? (
              <Button variant='danger' onClick={(event) => {
                event.preventDefault();
                emptyCart();
              }}>Empty Cart</Button>
            ) : null
          }
        </Col>
      </Row>
    </>
  );
}
