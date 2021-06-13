import React from "react";
import { Card, CardDeck } from "react-bootstrap";

import "./_lab4-expert-cards.scss";

export const Lab4ExpertCards = () => {
  return (
    <>
      <h3>Experts</h3>
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
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Person</Card.Title>
            <Card.Text>Description</Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </>
  );
};
