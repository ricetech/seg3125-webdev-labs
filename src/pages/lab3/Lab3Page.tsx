import React, { useEffect, useState } from "react";

import {
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Nav,
  Row,
} from "react-bootstrap";

import Lab3ProductsPage from "./pages/products";
import Lab3PreferencesPage from "./pages/preferences";
import Lab3CartPage from "./pages/cart";

import { ImprovementsList } from "./data/improvementsList";

import { Restrictions } from "./enums/restrictions";

import "./_lab3.scss";

export const Lab3Page = () => {
  let { path } = useRouteMatch();

  const [preferences, setPreferences] = useState<Set<Restrictions>>(new Set());

  const [lactoseFree, setLactoseFree] = useState(false);
  const [nutFree, setNutFree] = useState(false);
  const [organic, setOrganic] = useState(false);

  const [cart, setCart] = useState<Set<number>>(new Set());

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
  }, [lactoseFree, nutFree, organic]);

  return (
    <>
      <Container className="mt-4 container__fill" fluid="lg">
        <Row>
          <Col>
            <h1>Lab 3 - George's Grocery (Improved)</h1>
            <p>
              Please navigate this sub-site using the secondary navbar below.
            </p>
            <p>
              <b>Note:</b> The states of your Preferences and Cart are only kept
              while on the Lab 3 sub-site. Navigating to a different part of the
              website (Home Page, Lab 1, etc.) will cause your preferences and
              cart to be lost.
            </p>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    List of improvements over Lab 2 (Click to view)
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    This sample Grocery Store website is an improvement over the
                    one presented for <Link to="/lab2/preferences">Lab 2</Link>.
                    <br />
                    Below is a list containing everything that I've improved on
                    for this new version of the grocery store website. The
                    improvements are grouped by category or by the user persona
                    that the changes are directed at.
                    <ImprovementsList />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
        <hr />
        <Nav variant="pills" justify className="mb-3">
          <Nav.Item>
            <Nav.Link as={NavLink} to={`${path}/preferences`}>
              Preferences
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to={`${path}/products`}>
              Products
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to={`${path}/cart`}>
              Cart
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Switch>
          <Route path={`${path}/products`}>
            <Lab3ProductsPage
              preferences={preferences}
              setPreferences={setPreferences}
              cart={cart}
              setCart={setCart}
            />
          </Route>
          <Route path={`${path}/preferences`}>
            <Lab3PreferencesPage
              preferences={preferences}
              setPreferences={setPreferences}
              lactoseFree={lactoseFree}
              setLactoseFree={setLactoseFree}
              nutFree={nutFree}
              setNutFree={setNutFree}
              organic={organic}
              setOrganic={setOrganic}
            />
          </Route>
          <Route path={`${path}/cart`}>
            <Lab3CartPage cart={cart} setCart={setCart} />
          </Route>
          <Redirect from={`${path}/*`} to="/404" />
        </Switch>
      </Container>
    </>
  );
};
