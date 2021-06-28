import React from "react";

import { Button, Col, Container, Form } from "react-bootstrap";
import * as Yup from "yup";
import { withFormik, FormikProps } from "formik";

import { Service } from "../../interfaces/service";

import "./_lab5-appointment-form.scss";

const SELECT_TEXT = "Select one...";

interface Lab4AppointmentFormProps {
  services: Service[];
}

interface FormValues {
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  apptDateTime: string;
  apptPref: string;
  apptService: string;
  apptCardholderName: string;
  apptCardNumber: number;
  apptCardExpiry: string;
  apptCardCCV: number;
}

const schema = Yup.object().shape({
  patientName: Yup.string().required(),
  patientEmail: Yup.string().email().required(),
  patientPhone: Yup.string().required(),
  apptDateTime: Yup.string().required(),
  apptPref: Yup.string().required(),
  apptService: Yup.string().required(),
  apptCardholderName: Yup.string().required(),
  apptCardNumber: Yup.number().min(16).max(19).required(),
  apptCardExpiry: Yup.string().required(),
  apptCardCCV: Yup.number().min(3).max(4).required(),
});

const InnerForm = (
  props: Lab4AppointmentFormProps & FormikProps<FormValues>
) => {
  const { services, touched, values, errors, handleChange, handleBlur } = props;
  return (
    <Form noValidate>
      <h5>Patient Info</h5>
      <Form.Group controlId="apptName">
        <Form.Label>Patient Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter full name"
          name="patientName"
          value={values.patientName}
          onBlur={handleBlur}
          onChange={handleChange}
          isInvalid={touched.patientName && !!errors.patientName}
        />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col} controlId="apptEmail">
          <Form.Label>Patient Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="patientEmail"
            value={values.patientEmail}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={touched.patientEmail && !!errors.patientEmail}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="apptPhone">
          <Form.Label>Patient Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="123-456-7890"
            name="patientPhone"
            value={values.patientPhone}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={touched.patientPhone && !!errors.patientPhone}
          />
        </Form.Group>
      </Form.Row>
      <h5>Appointment Info</h5>
      <Form.Row>
        <Form.Group as={Col} controlId="apptDateTime">
          <Form.Label>Appt. Date & Time</Form.Label>
          <Form.Control
            type="datetime-local"
            name="apptDateTime"
            value={values.apptDateTime}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={touched.apptDateTime && !!errors.apptDateTime}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="apptPref">
          <Form.Label>Preferred Expert</Form.Label>
          <Form.Control
            as="select"
            name="apptPref"
            value={values.apptPref}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={touched.apptPref && !!errors.apptPref}
          >
            <option>{SELECT_TEXT}</option>
            <option>Hannah</option>
            <option>Joe</option>
            <option>Samantha</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="apptService">
          <Form.Label>Service</Form.Label>
          <Form.Control
            as="select"
            name="apptService"
            value={values.apptService}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={touched.apptService && !!errors.apptService}
          >
            <option>{SELECT_TEXT}</option>
            {services.map((service) => (
              <option key={service.id}>{service.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <h5>Payment Info</h5>
      <Form.Row>
        <Form.Group as={Col} controlId="apptCardholderName">
          <Form.Label>Cardholder Name</Form.Label>
          <Form.Control
            type="text"
            name="apptCardholderName"
            value={values.apptCardholderName}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={
              touched.apptCardholderName && !!errors.apptCardholderName
            }
          />
        </Form.Group>
        <Form.Group as={Col} controlId="apptCardNumber">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="number"
            pattern="[0-9\s]{13,19}"
            name="apptCardNumber"
            value={values.apptCardNumber}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={touched.apptCardNumber && !!errors.apptCardNumber}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="apptCardExpiry">
          <Form.Label>Card Expiry</Form.Label>
          <Form.Control
            type="month"
            name="apptCardExpiry"
            value={values.apptCardExpiry}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={touched.apptCardExpiry && !!errors.apptCardExpiry}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="apptCardCCV">
          <Form.Label>Card CCV</Form.Label>
          <Form.Control
            type="number"
            name="apptCardCCV"
            value={values.apptCardCCV}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={touched.apptCardCCV && !!errors.apptCardCCV}
          />
        </Form.Group>
      </Form.Row>
      <Button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
        }}
      >
        Book Appointment
      </Button>
    </Form>
  );
};

const Lab5FormikForm = withFormik<Lab4AppointmentFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      patientName: "",
      patientEmail: "",
      patientPhone: "",
      apptDateTime: "",
      apptPref: SELECT_TEXT,
      apptService: SELECT_TEXT,
      apptCardholderName: "",
      apptCardNumber: 0,
      apptCardExpiry: "",
      apptCardCCV: 0,
    };
  },

  validationSchema: schema,

  handleSubmit: (values) => {
    console.log(values);
  },
})(InnerForm);

export const Lab5AppointmentForm = (props: Lab4AppointmentFormProps) => {
  return (
    <>
      <Container className="container__md">
        <h3>Book an Appointment</h3>
        <Lab5FormikForm services={props.services} />
      </Container>
    </>
  );
};
