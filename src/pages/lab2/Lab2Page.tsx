import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";

import './_lab2.scss';

export const Lab2Page = () => {
  let { path } = useRouteMatch();

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
            Products
          </Route>
          <Route path={`${path}/preferences`}>
            Preferences
          </Route>
          <Route path={`${path}/cart`}>
            Cart
          </Route>
        </Switch>
      </Container>
    </>
  );
}
