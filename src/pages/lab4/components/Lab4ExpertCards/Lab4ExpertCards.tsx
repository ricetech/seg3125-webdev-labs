import React from "react";
import { Card, CardDeck, Col, Row } from "react-bootstrap";

import "./_lab4-expert-cards.scss";

export const Lab4ExpertCards = () => {
  return (
    <>
      <h3>Experts</h3>
      <Row>
        <Col>
          <CardDeck>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Person</Card.Title>
                <Card.Text>Description</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Person</Card.Title>
                <Card.Text>Description</Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <CardDeck>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Person</Card.Title>
                <Card.Text>Description</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Person</Card.Title>
                <Card.Text>Description</Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </>
  );
};
