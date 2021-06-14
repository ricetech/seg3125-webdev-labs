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
            <p className="mb-0">5575 Second Line, Erin, ON</p>
          </Col>
        </Row>
        <hr />
        <Row className="mb-4">
          <Col sm={12} lg={4}>
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
        <p className="text-muted mt-4">
          Some images from{" "}
          <a
            href="https://www.cbihealth.ca/locations/mississauga-queensway"
            target="_blank"
            rel="noreferrer"
          >
            CBI Health
          </a>
          . Please note that the images are used as generic examples and the
          experts portrayed on this page are not meant to bear any resemblance
          to any real person.
        </p>
      </Container>
    </>
  );
};
