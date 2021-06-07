import React, { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";

import Lab2ProductsPage from "./pages/products";
import Lab2PreferencesPage from "./pages/preferences";
import Lab2CartPage from "./pages/cart";

import { Restrictions } from "./enums/restrictions";

import './_lab2.scss';

export const Lab2Page = () => {
  let { path } = useRouteMatch();

  const [ preferences, setPreferences ] = useState<Set<Restrictions>>(new Set());

  const [ lactoseFree, setLactoseFree ] = useState(false);
  const [ nutFree, setNutFree ] = useState(false);
  const [ organic, setOrganic ] = useState(false);

  const [ cart, setCart ] = useState<Set<number>>(new Set());

  // Keep preferences up-to-date
  useEffect(() => {
    const newPreferences = new Set<Restrictions>();
    if (lactoseFree) {
      newPreferences.add(Restrictions.LactoseFree);
    }
    if (nutFree) {
      newPreferences.add(Restrictions.NutFree);
    }
    if (organic) {
      newPreferences.add(Restrictions.Organic);
    }

    setPreferences(newPreferences);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lactoseFree, nutFree, organic])

  return (
    <>
      <Container className='mt-4 container__fill container__md'>
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
