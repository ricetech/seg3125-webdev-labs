import React from "react";
import { Card, CardDeck, Col, Row } from "react-bootstrap";
import { BsPeople } from "react-icons/bs";

import "./_lab5-expert-cards.scss";

export const Lab5ExpertCards = () => {
  return (
    <>
      <h3>
        <BsPeople /> Experts
      </h3>
      <Row>
        <Col>
          <CardDeck>
            <Card className="lab4--card">
              <Card.Img variant="top" src="img/lab4/expert1.jpg" />
              <Card.Body>
                <Card.Title>Hannah</Card.Title>
                <Card.Text>
                  Hannah is the head physiotherapist and founder of Hannah's
                  Physiotherapy Clinic. She is in charge of organizing all of
                  the services that we offer at the clinic.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="lab4--card">
              <Card.Img variant="top" src="img/lab4/expert2.jpg" />
              <Card.Body>
                <Card.Title>Joe</Card.Title>
                <Card.Text>
                  Joe is one of our longest tenured physiotherapists. He works
                  closely with Hannah to make sure the experience of every
                  patient is an enjoyable one.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="lab4--card">
              <Card.Img variant="top" src="img/lab4/expert3.jpg" />
              <Card.Body>
                <Card.Title>Samantha</Card.Title>
                <Card.Text>
                  Samantha is a physiotherapist in training at our clinic. She
                  is always ready for a new challenge and can't wait to work to
                  help our patients.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </>
  );
};
