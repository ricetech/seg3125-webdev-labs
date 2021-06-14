import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Lab4ServicesTable from "./components/Lab4ServicesTable";
import Lab4ExpertCards from "./components/Lab4ExpertCards";
import Lab4AppointmentForm from "./components/Lab4AppointmentForm";

import "./_lab4.scss";
import { services } from "./data/services";

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
          <Col xs={12} md={6}>
            <Lab4ServicesTable services={services} />
          </Col>
          <Col>
            <Lab4ExpertCards />
          </Col>
        </Row>
        <Row>
          <Col>
            <Lab4AppointmentForm services={services} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
