import React from "react";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Restrictions } from "../../enums/restrictions";

import "./_lab3-preferences.scss";

interface Lab3PreferencesPageProps {
  preferences: Set<Restrictions>;
  setPreferences: React.Dispatch<React.SetStateAction<Set<Restrictions>>>;
  lactoseFree: boolean;
  setLactoseFree: React.Dispatch<React.SetStateAction<boolean>>;
  nutFree: boolean;
  setNutFree: React.Dispatch<React.SetStateAction<boolean>>;
  organic: boolean;
  setOrganic: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Lab3PreferencesPage = (props: Lab3PreferencesPageProps) => {
  const handleChange = (
    restriction: Restrictions,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    switch (restriction) {
      case Restrictions.LactoseFree:
        props.setLactoseFree(event.target.checked);
        break;
      case Restrictions.NutFree:
        props.setNutFree(event.target.checked);
        break;
      case Restrictions.Organic:
        props.setOrganic(event.target.checked);
        break;
    }
  };

  return (
    <Container className="container__md">
      <Row>
        <Col>
          <h2>Preferences</h2>
          <p>Please set your dietary restrictions/preferences below.</p>
          <p>
            Your preferences will filter results on the{" "}
            <Link to="/lab3/products">products</Link> page, as only products
            that match your preferences will be shown.
          </p>
          <p>
            Note: Changes are saved automatically. You can return to this page
            at any time to modify your preferences.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="pref">
              <Form.Check
                label="Lactose Free"
                checked={props.lactoseFree}
                type="switch"
                id="pref-lf"
                onChange={(event) =>
                  handleChange(Restrictions.LactoseFree, event)
                }
              />
              <Form.Check
                label="Nut Free"
                checked={props.nutFree}
                type="switch"
                id="pref-nf"
                onChange={(event) => handleChange(Restrictions.NutFree, event)}
              />
              <Form.Check
                label="Organic"
                checked={props.organic}
                type="switch"
                id="pref-org"
                onChange={(event) => handleChange(Restrictions.Organic, event)}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="float-right" as={Link} to="/lab3/products">
            Continue to Products
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
