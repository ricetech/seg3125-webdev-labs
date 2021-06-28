import React from "react";

import { Button, Col, Container, Form } from "react-bootstrap";

import { Service } from "../../interfaces/service";

import "./_lab5-appointment-form.scss";

interface Lab4AppointmentFormProps {
  services: Service[];
}

export const Lab5AppointmentForm = (props: Lab4AppointmentFormProps) => {
  return (
    <>
      <Container className="container__md">
        <h3>Book an Appointment</h3>
        <Form>
          <h5>Patient Info</h5>
          <Form.Group controlId="apptName">
            <Form.Label>Patient Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="apptEmail">
              <Form.Label>Patient Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group as={Col} controlId="apptPhone">
              <Form.Label>Patient Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="123-456-7890" />
            </Form.Group>
          </Form.Row>
          <h5>Appointment Info</h5>
          <Form.Row>
            <Form.Group as={Col} controlId="apptDateTime">
              <Form.Label>Appt. Date & Time</Form.Label>
              <Form.Control type="datetime-local" />
            </Form.Group>
            <Form.Group as={Col} controlId="apptPref">
              <Form.Label>Preferred Expert</Form.Label>
              <Form.Control as="select">
                <option selected>Select one...</option>
                <option>Hannah</option>
                <option>Joe</option>
                <option>Samantha</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="apptService">
              <Form.Label>Service</Form.Label>
              <Form.Control as="select">
                <option selected>Select one...</option>
                {props.services.map((service) => (
                  <option key={service.id}>{service.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <h5>Payment Info</h5>
          <Form.Row>
            <Form.Group as={Col} controlId="apptCardholderName">
              <Form.Label>Cardholder Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="apptCardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="number" pattern="[0-9\s]{13,19}" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="apptCardExpiry">
              <Form.Label>Card Expiry</Form.Label>
              <Form.Control type="month" />
            </Form.Group>
            <Form.Group as={Col} controlId="apptCardCCV">
              <Form.Label>Card CCV</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Form.Row>
          <Button type="submit" onClick={(event) => event.preventDefault()}>
            Book Appointment
          </Button>
        </Form>
      </Container>
    </>
  );
};
