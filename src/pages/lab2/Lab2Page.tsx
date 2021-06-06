import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";

import { Restrictions } from "./enums/restrictions";
import { Product } from "./interfaces/product";

import Lab2ProductsPage from "./pages/products";
import Lab2PreferencesPage from "./pages/preferences";
import Lab2CartPage from "./pages/cart";

import './_lab2.scss';

export const Lab2Page = () => {
  let { path } = useRouteMatch();

  const [preferences, setPreferences] = useState<Restrictions[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <>
      <Container className='mt-4 lab2--container'>
        <Row>
          <Col>
            <h1>Lab 2 - George's Grocery</h1>
            <p>Please navigate this sub-site using the Lab 2 dropdown in the navbar.</p>
          </Col>
        </Row>
        <hr />
        <Switch>
          <Route path={`${path}/products`}>
            <Lab2ProductsPage preferences={preferences} setPreferences={setPreferences} cart={cart} setCart={setCart} />
          </Route>
          <Route path={`${path}/preferences`}>
            <Lab2PreferencesPage preferences={preferences} setPreferences={setPreferences} />
          </Route>
          <Route path={`${path}/cart`}>
            <Lab2CartPage cart={cart} setCart={setCart} />
          </Route>
        </Switch>
      </Container>
    </>
  );
}
