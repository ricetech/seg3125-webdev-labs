import React from 'react';
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { priceComparator } from "../../interfaces/product";
import { products } from "../../data/products";

import './_lab3-cart.scss';

interface Lab3CartPageProps {
  cart: Set<number>;
  setCart: React.Dispatch<React.SetStateAction<Set<number>>>;
}

export const Lab3CartPage = (props: Lab3CartPageProps) => {
  const emptyCart = () => props.setCart(new Set<number>());

  const removeItem = (itemId: number): void => {
    const newCart = new Set(props.cart);
    newCart.delete(itemId);
    props.setCart(newCart);
  };

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
    <Container className='container__md'>
      <Row>
        <Col>
          <h2>Cart</h2>
        </Col>
      </Row>
      {
        props.cart.size !== 0 ? (
          <Row>
            <Col>
              <Table hover>
                <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th />
                </tr>
                </thead>
                <tbody>
                {sortedFilteredProducts.map((product) => (
                  <tr key={`lab3-cart-${product.id}`}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>
                      <Button
                        size='sm'
                        variant='danger'
                        className='lab3-cart--del-btn float-right'
                        onClick={
                          (event) => {
                            event.preventDefault();
                            removeItem(product.id);
                          }
                        }
                      >
                        Remove item
                      </Button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td />
                  <td><b>Total</b></td>
                  <td>{`$${cartTotal()}`}</td>
                  <td />
                </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        ) : (
          <p>Your cart is empty.</p>
        )
      }
      <Row>
        <Col>
          <Button variant='secondary' as={Link} to='/lab3/products'>Back to Products</Button>{' '}
          {
            props.cart.size !== 0 ? (
              <Button variant='outline-danger' className='float-right' onClick={(event) => {
                event.preventDefault();
                emptyCart();
              }}>Empty Cart</Button>
            ) : null
          }
        </Col>
      </Row>
    </Container>
  );
}
