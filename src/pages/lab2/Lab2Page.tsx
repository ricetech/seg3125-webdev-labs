import React, { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";

import { Restrictions } from "./enums/restrictions";
import { Product } from "./interfaces/product";

import Lab2ProductsPage from "./pages/products";
import Lab2PreferencesPage from "./pages/preferences";
import Lab2CartPage from "./pages/cart";

import './_lab2.scss';

export const Lab2Page = () => {
  let { path } = useRouteMatch();

  const [ preferences, setPreferences ] = useState<Restrictions[]>([]);

  const [ lactoseFree, setLactoseFree ] = useState(false);
  const [ nutFree, setNutFree ] = useState(false);
  const [ organic, setOrganic ] = useState(false);

  const [ cart, setCart ] = useState<number[]>([]);

  // Keep preferences up-to-date
  useEffect(() => {
    const newPreferences = [];
    if (lactoseFree) {
      newPreferences.push(Restrictions.LactoseFree);
    }
    if (nutFree) {
      newPreferences.push(Restrictions.NutFree);
    }
    if (organic) {
      newPreferences.push(Restrictions.Organic);
    }

    setPreferences(newPreferences);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lactoseFree, nutFree, organic])

  return (
    <>
      <Container className='mt-4 container__md'>
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
            <Lab2PreferencesPage preferences={preferences} setPreferences={setPreferences} lactoseFree={lactoseFree}
                                 setLactoseFree={setLactoseFree} nutFree={nutFree} setNutFree={setNutFree}
                                 organic={organic} setOrganic={setOrganic} />
          </Route>
          <Route path={`${path}/cart`}>
            <Lab2CartPage cart={cart} setCart={setCart} />
          </Route>
        </Switch>
      </Container>
    </>
  );
}
