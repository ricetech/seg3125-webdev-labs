import React from "react";

import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { intersection } from "lodash-es";

import { Restrictions } from "../../enums/restrictions";

import { priceComparator } from "../../interfaces/product";

import { products } from "../../data/products";

import "./_lab3-products.scss";

interface Lab3ProductsPageProps {
  preferences: Set<Restrictions>;
  setPreferences: React.Dispatch<React.SetStateAction<Set<Restrictions>>>;
  cart: Set<number>;
  setCart: React.Dispatch<React.SetStateAction<Set<number>>>;
}

export const Lab3ProductsPage = (props: Lab3ProductsPageProps) => {
  const addToCart = (itemId: number) => {
    props.setCart(new Set(props.cart).add(itemId));
  };

  const inCart = (itemId: number) => props.cart.has(itemId);

  return (
    <>
      <Row>
        <Col>
          <h2>Products</h2>
          <p>
            Based on your <Link to="/lab3/preferences">preferences</Link>, we
            have curated the following products for you.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Lactose Free</th>
                <th>Nut Free</th>
                <th>Organic</th>
                <th>Price</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {products
                .sort(priceComparator)
                .filter((product) => {
                  if (props.preferences.size === 0) {
                    return true;
                  }
                  // A product must satisfy all of the preferences in order to be shown
                  return (
                    intersection(
                      [...product.restrictions],
                      [...props.preferences]
                    ).length === props.preferences.size
                  );
                })
                .map((product) => (
                  <tr key={`lab3-product-${product.id}`}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>
                      <Form.Check
                        checked={product.restrictions.has(
                          Restrictions.LactoseFree
                        )}
                        readOnly
                      />
                    </td>
                    <td>
                      <Form.Check
                        checked={product.restrictions.has(Restrictions.NutFree)}
                        readOnly
                      />
                    </td>
                    <td>
                      <Form.Check
                        checked={product.restrictions.has(Restrictions.Organic)}
                        readOnly
                      />
                    </td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>
                      <Button
                        className="lab3-products--atc-btn float-right"
                        size="sm"
                        onClick={(event) => {
                          event.preventDefault();
                          addToCart(product.id);
                        }}
                        disabled={inCart(product.id)}
                        variant={inCart(product.id) ? "success" : "primary"}
                      >
                        {inCart(product.id) ? "In Cart" : "Add to Cart"}
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
          <Button variant="secondary" as={Link} to="/lab3/preferences">
            Back to Preferences
          </Button>
          <Button className="float-right" as={Link} to="/lab3/cart">
            Continue to Cart
          </Button>
        </Col>
      </Row>
    </>
  );
};
