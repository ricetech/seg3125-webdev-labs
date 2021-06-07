import React from 'react';
import { Button, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Restrictions } from "../../enums/restrictions";

import './_lab2-products.scss';
import { products } from "../../data/products";
import { priceComparator } from "../../interfaces/product";

interface Lab2ProductsPageProps {
  preferences: Restrictions[];
  setPreferences: React.Dispatch<React.SetStateAction<Restrictions[]>>;
  cart: Set<number>;
  setCart: React.Dispatch<React.SetStateAction<Set<number>>>;
}

export const Lab2ProductsPage = (props: Lab2ProductsPageProps) => {

  const addToCart = (itemId: number) => {
    props.setCart(new Set(props.cart).add(itemId));
  }

  const inCart = (itemId: number) => props.cart.has(itemId);

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
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th />
            </tr>
            </thead>
            <tbody>
            {products.sort(priceComparator).map((product) => (
              <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                  <Button
                    className='lab2-products--atc-btn'
                    size='sm'
                    onClick={(event) => {
                      event.preventDefault();
                      addToCart(product.id);
                    }}
                    disabled={inCart(product.id)}
                    variant={inCart(product.id) ? 'success' : 'primary'}
                  >
                    {inCart(product.id) ? 'In Cart' : 'Add to Cart'}
                  </Button>
                </td>
              </tr>
            ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button as={Link} to='/lab2/cart'>Go to Cart</Button>
        </Col>
      </Row>
    </>
  );
}
