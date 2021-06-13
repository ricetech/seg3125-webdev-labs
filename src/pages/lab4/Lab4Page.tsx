import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Lab4Page = () => {
  return (
    <>
      <Container className="mt-4 container__fill">
        <Row>
          <Col>
            <h1>Lab 4 - Hannah's Physiotherapy Clinic</h1>
            <p>5575 Second Line, Erin, ON</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h3>Services</h3>
          </Col>
          <Col>
            <h3>Experts</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Book an appointment</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};
