import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { NavHashLink } from "react-router-hash-link";

import Lab5ServicesTable from "./components/Lab5ServicesTable";
import Lab5ExpertCards from "./components/Lab5ExpertCards";
import Lab5AppointmentForm from "./components/Lab5AppointmentForm";

import { services } from "./data/services";
import "./_lab5.scss";

export const Lab5Page = () => {
  let { path } = useRouteMatch();

  return (
    <>
      <Container className="mt-4 container__fill">
        <Row>
          <Col>
            <h1>Lab 5 - Hannah's Physiotherapy Clinic (Improved)</h1>
            <p className="mb-0">5575 Second Line, Erin, ON</p>
          </Col>
        </Row>
        <hr />
        <Nav variant="pills" justify className="mb-3">
          <Nav.Item>
            <Nav.Link exact as={NavHashLink} smooth to={`${path}#services`}>
              Services
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link exact as={NavHashLink} smooth to={`${path}#experts`}>
              Our Experts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link exact as={NavHashLink} smooth to={`${path}#book`}>
              Book Appointment
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row className="mb-4">
          <Col sm={12} lg={4} id="services">
            <Lab5ServicesTable services={services} />
          </Col>
          <Col id="experts">
            <Lab5ExpertCards />
          </Col>
        </Row>
        <Row>
          <Col id="book">
            <Lab5AppointmentForm services={services} />
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
